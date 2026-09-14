import { agentRouter } from "../src/server/api/routers/agentRouter";
import { prisma } from "../src/server/db";

jest.mock("../src/server/auth", () => ({
  getServerAuthSession: jest.fn(),
}));

jest.mock("../src/server/db", () => ({
  prisma: {
    agent: {
      create: jest.fn(),
      findMany: jest.fn(),
      findFirstOrThrow: jest.fn(),
      updateMany: jest.fn(),
    },
  },
}));

describe("agentRouter", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it("creates agent with nested tasks in a single database call", async () => {
    const mockAgent = {
      id: "agent-123",
      name: "Test Agent",
      goal: "Test Goal",
      userId: "user-1",
    };

    (prisma.agent.create as jest.Mock).mockResolvedValue(mockAgent);

    const caller = agentRouter.createCaller({
      session: {
        user: { id: "user-1", name: "Test User" },
        expires: "1",
      },
      prisma,
    });

    const result = await caller.create({
      name: "Test Agent",
      goal: "Test Goal",
      tasks: [
        { type: "task", value: "Task 1", info: "Info 1" },
        { type: "task", value: "Task 2" },
      ],
    });

    expect(result).toEqual(mockAgent);
    expect(prisma.agent.create).toHaveBeenCalledTimes(1);
    expect(prisma.agent.create).toHaveBeenCalledWith({
      data: {
        name: "Test Agent",
        goal: "Test Goal",
        userId: "user-1",
        tasks: {
          create: [
            { type: "task", value: "Task 1", info: "Info 1", sort: 0 },
            { type: "task", value: "Task 2", info: undefined, sort: 1 },
          ],
        },
      },
    });
  });
});
