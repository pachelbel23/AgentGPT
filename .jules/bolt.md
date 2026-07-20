## 2025-07-24 - Nested Create Optimization in Prisma
**Learning:** Sequential database writes in Prisma can be optimized dramatically by using nested create relations. This groups multiple insert operations (such as creating an Agent and its tasks) into a single database transaction and a single database roundtrip, significantly reducing overhead and N+1 query patterns.
**Action:** Always prefer nested create or database transaction/batching structures when creating parent-child entities simultaneously.
