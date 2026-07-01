## 2025-05-14 - [Optimize agent creation with nested Prisma writes]
**Learning:** Sequential 1+N database writes for parent-child relationships (Agent and AgentTask) significantly increase latency due to multiple round-trips. Prisma's nested 'create' allows batching these into a single operation.
**Action:** Always prefer nested 'create' or 'createMany' for persisting related entities to minimize database overhead.
