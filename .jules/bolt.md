## 2026-07-04 - Optimize Agent creation with nested Prisma writes
**Learning:** Sequential database writes (1+N) for parent-child relationships significantly increase latency due to multiple round-trips. Prisma's nested `create` feature can batch these into a single transaction/round-trip.
**Action:** Always prefer nested `create` or `createMany` when persisting objects with their relations to minimize database overhead.
