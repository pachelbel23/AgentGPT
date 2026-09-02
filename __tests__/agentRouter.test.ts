import { agentRouter } from "../src/server/api/routers/agentRouter";
import { prisma } from "../src/server/db";

jest.mock("../src/server/auth", () => ({
  getServerAuthSession: jest.fn(),
}));

jest.mock("../src/server/db", () => ({
  prisma: {
    agent: {
      create: jest.fn(),
    },
  },
}));

describe("agentRouter", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("creates an agent with nested tasks in a single query", async () => {
    const mockAgent = {
      id: "agent-123",
      name: "Test Agent",
      goal: "Test Goal",
      userId: "user-123",
    };

    // eslint-disable-next-line @typescript-eslint/unbound-method
    const createFn = prisma.agent.create as jest.Mock;
    createFn.mockResolvedValue(mockAgent);

    const caller = agentRouter.createCaller({
      session: {
        user: { id: "user-123", name: "Test User" },
        expires: "2099-01-01",
      },
      prisma,
    });

    const result = await caller.create({
      name: "Test Agent",
      goal: "Test Goal",
      tasks: [
        { type: "task", value: "Task 1", info: "info 1" },
        { type: "task", value: "Task 2" },
      ],
    });

    expect(result).toEqual(mockAgent);
    expect(createFn).toHaveBeenCalledTimes(1);
    expect(createFn).toHaveBeenCalledWith({
      data: {
        name: "Test Agent",
        goal: "Test Goal",
        userId: "user-123",
        tasks: {
          create: [
            { type: "task", info: "info 1", value: "Task 1", sort: 0 },
            { type: "task", info: undefined, value: "Task 2", sort: 1 },
          ],
        },
      },
    });
  });
});
