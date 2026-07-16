## 2025-07-24 - [Optimized Agent Creation with Nested Writes]
**Learning:** Sequential 1+N database writes for parent-child relations (like Agent and AgentTask) significantly increase latency. Prisma's nested `create` is much more efficient as it translates to a single database transaction and fewer roundtrips.
**Action:** Always prefer nested Prisma creates for multi-level data structures to ensure atomicity and peak performance.
