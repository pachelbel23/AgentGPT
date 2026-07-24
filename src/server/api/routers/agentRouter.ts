import { z } from "zod";

import { createTRPCRouter, protectedProcedure, publicProcedure } from "../trpc";
import { prisma } from "../../db";
import { messageParser } from "../../../types/agentTypes";

const saveAgentParser = z.object({
  name: z.string(),
  goal: z.string(),
  tasks: z.array(messageParser),
});

export const agentRouter = createTRPCRouter({
  create: protectedProcedure
    .input(saveAgentParser)
    .mutation(async ({ input, ctx }) => {
      /**
       * Optimization: Use Prisma's nested create to batch agent and task creation.
       * This reduces the number of database calls from 1 + N (where N is the number of tasks) to 1.
       * It also ensures that the entire operation is performed within a single database transaction,
       * providing atomicity and data consistency.
       * Expected impact: Significant reduction in latency for agent creation, especially with many tasks.
       */
      const agent = await prisma.agent.create({
        data: {
          name: input.name,
          goal: input.goal,
          userId: ctx.session.user.id,
          tasks: {
            create: input.tasks.map((e, i) => ({
              type: e.type,
              info: e.info,
              value: e.value,
              sort: i,
            })),
          },
        },
      });
      return agent;
    }),
  getAll: protectedProcedure.query(async ({ ctx }) => {
    return prisma.agent.findMany({
      where: {
        userId: ctx.session?.user?.id,
        deleteDate: null,
      },
      orderBy: { createDate: "desc" },
      take: 20,
    });
  }),
  findById: publicProcedure.input(z.string()).query(async ({ input, ctx }) => {
    const agent = await prisma.agent.findFirstOrThrow({
      where: { id: input, deleteDate: null },
      include: {
        tasks: {
          orderBy: {
            sort: "asc",
          },
        },
      },
    });

    return {
      ...agent,
    };
  }),
  deleteById: protectedProcedure
    .input(z.string())
    .mutation(async ({ input, ctx }) => {
      await prisma.agent.updateMany({
        where: { id: input, userId: ctx.session?.user?.id },
        data: {
          deleteDate: new Date(),
        },
      });
    }),
});
