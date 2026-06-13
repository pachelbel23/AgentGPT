## 2025-05-15 - [Database] Prisma Nested Create Optimization
**Learning:** Sequential database writes (1+N) for parent-child relationships (Agent -> AgentTasks) caused significant latency (~171ms for 20 tasks). refs: `src/server/api/routers/agentRouter.ts`.
**Action:** Use Prisma's nested `create` to reduce database round-trips to 1, improving performance by ~95% (~8ms).

## 2025-05-15 - [Environment] Side-effects of `useSqlite.sh`
**Learning:** The `useSqlite.sh` script modifies `schema.prisma` permanently by changing the provider and removing `@db.Text` attributes, which can lead to regressions if committed.
**Action:** Always verify `prisma/schema.prisma` state and run `npx prisma generate` after benchmarking to restore the original MySQL configuration.
