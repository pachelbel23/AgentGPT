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
  afterEach(() => {
    jest.clearAllMocks();
  });

  it("creates agent with tasks using a nested relational create query", async () => {
    const mockAgent = {
      id: "agent-123",
      name: "Test Agent",
      goal: "Test Goal",
      userId: "user-123",
    };

    (prisma.agent.create as jest.Mock).mockResolvedValue(mockAgent);

    const caller = agentRouter.createCaller({
      session: {
        user: {
          id: "user-123",
          name: "Test User",
          email: "test@example.com",
        },
        expires: new Date().toISOString(),
      },
      prisma,
    });

    const input = {
      name: "Test Agent",
      goal: "Test Goal",
      tasks: [
        { type: "task", value: "Task 1", info: "Info 1" },
        { type: "task", value: "Task 2", info: "Info 2" },
      ],
    };

    const result = await caller.create(input);

    expect(result).toEqual(mockAgent);
    expect(prisma.agent.create).toHaveBeenCalledTimes(1);
    expect(prisma.agent.create).toHaveBeenCalledWith({
      data: {
        name: "Test Agent",
        goal: "Test Goal",
        userId: "user-123",
        tasks: {
          create: [
            { type: "task", value: "Task 1", info: "Info 1", sort: 0 },
            { type: "task", value: "Task 2", info: "Info 2", sort: 1 },
          ],
        },
      },
    });
  });
});
