## 2025-07-24 - Batch Creation via Nested Prisma Writes
**Learning:** Sequential `prisma.create()` queries inside `Promise.all` result in N+1 database round-trips when inserting related entities (e.g. `Agent` and `AgentTask`s). Using nested relational `create` (`tasks: { create: [...] }`) allows Prisma to execute the parent and child entity creations in a single optimized database transaction/batch.
**Action:** Always prefer nested relational writes (`create`, `createMany`) in Prisma over mapping child entities to individual `prisma.model.create()` calls.
