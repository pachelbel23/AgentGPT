# Bolt's Performance Journal

## 2026-08-06 - Optimize Agent Creation with Nested Prisma Writes
**Learning:** In Prisma, creating parent and child records (e.g., Agent and AgentTasks) in sequential or parallel queries causes N+1 database roundtrips and increases transaction overhead. Using a single nested Prisma `create` with a `tasks: { create: [...] }` relation block reduces the database round-trips to exactly 1, ensures transaction atomicity, and eliminates any potential for orphaned records.
**Action:** Always favor nested Prisma operations (`create` or `connectOrCreate`) over multiple sequential or parallel `prisma.model.create` operations when managing related entities.
