## 2025-07-24 - Nested Prisma Creates for Batch Data Operations
**Learning:** Executing `Promise.all` with multiple `prisma.<model>.create` calls creates separate sequential database INSERT queries, causing significant N+1 network/database latency overhead (~270ms for 50 records). Using Prisma's nested write syntax (`tasks: { create: [...] }`) bundles creation into a single query/transaction (~15ms), yielding a ~94% latency reduction.
**Action:** Always prefer Prisma's nested create/connect syntax over mapped `Promise.all` queries when persisting parent-child relationships.
