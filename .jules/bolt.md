## 2025-05-15 - [Nested Prisma Create Optimization]
**Learning:** Using nested Prisma `create` operations instead of manual loops with `Promise.all` for relational data significantly reduces database roundtrips and ensures atomicity.
**Action:** Always prefer nested `create` or `createMany` for bulk/relational data persistence to avoid 1+N query bottlenecks and potential data inconsistency.
