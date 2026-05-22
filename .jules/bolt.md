## 2025-05-14 - Batch task creation with createMany
**Learning:** The `create` mutation in `agentRouter.ts` used an N+1 write pattern, initiating multiple database roundtrips for task persistence. MySQL supports efficient bulk insertions which Prisma's `createMany` leverages.
**Action:** Use `prisma.model.createMany` for batch persistence to reduce database roundtrips from O(N) to O(1).
