import { agentRouter } from "../src/server/api/routers/agentRouter";
import { prisma } from "../src/server/db";

// Mock auth module to avoid loading next-auth/jose ESM dependencies in Jest
jest.mock("../src/server/auth", () => ({
  getServerAuthSession: jest.fn(),
}));

// Mock Prisma Client
jest.mock("../src/server/db", () => ({
  prisma: {
    agent: {
      create: jest.fn(),
    },
  },
}));

describe("agentRouter", () => {
  it("creates an agent and tasks in a single nested write call", async () => {
    const mockAgent = { id: "agent-123", name: "Test Agent", goal: "Test Goal" };
    (prisma.agent.create as jest.Mock).mockResolvedValue(mockAgent);

    const caller = agentRouter.createCaller({
      session: {
        user: { id: "user-123" },
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
    expect(result).toEqual(mockAgent);
  });
});
