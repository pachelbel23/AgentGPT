import { agentRouter } from "../src/server/api/routers/agentRouter";
import { prisma } from "../src/server/db";

// Mock auth to avoid loading next-auth ESM dependencies
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
  it("uses nested create when calling agentRouter.create", async () => {
    const mockAgent = { id: "agent-123", name: "Test Agent", goal: "Test Goal", userId: "user-123" };
    // eslint-disable-next-line @typescript-eslint/unbound-method
    const createAgentMock = jest.mocked(prisma.agent.create);
    createAgentMock.mockResolvedValue(mockAgent as never);

    const caller = agentRouter.createCaller({
      session: {
        user: { id: "user-123", name: "Test User" },
        expires: "2099-01-01",
      },
      prisma: prisma,
    });

    const result = await caller.create({
      name: "Test Agent",
      goal: "Test Goal",
      tasks: [
        { type: "task", value: "Do something", info: "info 1" },
        { type: "task", value: "Do something else", info: "info 2" },
      ],
    });

    expect(createAgentMock).toHaveBeenCalledWith({
      data: {
        name: "Test Agent",
        goal: "Test Goal",
        userId: "user-123",
        tasks: {
          create: [
            { type: "task", value: "Do something", info: "info 1", sort: 0 },
            { type: "task", value: "Do something else", info: "info 2", sort: 1 },
          ],
        },
      },
    });

    expect(result).toEqual(mockAgent);
  });
});
