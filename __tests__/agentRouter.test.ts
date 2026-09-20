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
  it("should create an agent with nested tasks using a single nested prisma.agent.create call", async () => {
    const mockCreatedAgent = {
      id: "agent-123",
      name: "Test Agent",
      goal: "Test Goal",
      userId: "user-123",
    };

    (prisma.agent.create as jest.Mock).mockResolvedValue(mockCreatedAgent);

    const caller = agentRouter.createCaller({
      session: {
        user: {
          id: "user-123",
          name: "Test User",
        },
        expires: "2099-01-01",
      },
      prisma,
    });

    const result = await caller.create({
      name: "Test Agent",
      goal: "Test Goal",
      tasks: [
        { type: "task", value: "Task 1", info: "Info 1" },
        { type: "task", value: "Task 2", info: "Info 2" },
      ],
    });

    expect(result).toEqual(mockCreatedAgent);
    expect(prisma.agent.create).toHaveBeenCalledTimes(1);
    expect(prisma.agent.create).toHaveBeenCalledWith({
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
  });
});
