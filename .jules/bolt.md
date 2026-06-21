## 2025-05-14 - [Batching Database Writes with Prisma Nested Creates]
**Learning:** Sequential database writes (1+N) for related entities like Agents and Tasks create significant latency due to multiple round-trips and transaction overhead. Prisma's nested `create` allows batching these into a single database operation.
**Action:** Always look for opportunities to use nested `create` or `createMany` when persisting parent-child relationships to ensure atomicity and reduce latency.
