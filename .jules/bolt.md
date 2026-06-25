## 2025-06-25 - [Batching Database Writes with Prisma Nested Creates]
**Learning:** Sequential database writes ($1 + N$) for parent-child relationships are a major bottleneck. Prisma's nested `create` allows batching these into a single transaction and round-trip, significantly reducing latency and ensuring atomicity.
**Action:** Always prefer nested writes or `createMany` when persisting related records to minimize database round-trips.
