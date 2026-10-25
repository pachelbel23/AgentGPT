/* eslint-disable @typescript-eslint/unbound-method */
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

describe("agentRouter.create", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it("creates an agent and its tasks using a single nested write", async () => {
    const mockSession = {
      user: {
        id: "user-123",
        name: "Test User",
        email: "test@example.com",
      },
      expires: "2099-01-01",
    };

    const mockAgentResult = {
      id: "agent-123",
      name: "Test Agent",
      goal: "Test Goal",
      userId: "user-123",
      createDate: new Date(),
    };

    (prisma.agent.create as jest.Mock).mockResolvedValue(mockAgentResult);

    const caller = agentRouter.createCaller({
      session: mockSession,
      prisma,
    });

    const input = {
      name: "Test Agent",
      goal: "Test Goal",
      tasks: [
        { type: "task", info: "Info 1", value: "Task 1" },
        { type: "task", info: "Info 2", value: "Task 2" },
      ],
    };

    const result = await caller.create(input);

    const createMock = jest.mocked(prisma.agent.create);
    expect(createMock).toHaveBeenCalledTimes(1);
    expect(createMock).toHaveBeenCalledWith({
      data: {
        name: "Test Agent",
        goal: "Test Goal",
        userId: "user-123",
        tasks: {
          create: [
            { type: "task", info: "Info 1", value: "Task 1", sort: 0 },
            { type: "task", info: "Info 2", value: "Task 2", sort: 1 },
          ],
        },
      },
    });

    expect(result).toBe(mockAgentResult);
  });
});
