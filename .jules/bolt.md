## 2025-05-15 - Prisma Nested Create Optimization
**Learning:** Using Prisma's nested `create` instead of multiple `create` calls wrapped in `Promise.all` reduces database roundtrips from 1+N to 1 and ensures atomicity of the operation.
**Action:** Prefer nested `create` or `createMany` for bulk/related record persistence to minimize latency and ensure data consistency.
