## 2025-01-24 - [Database Optimization]
**Learning:** Sequential Prisma `create` calls for 1+N relationships (e.g., Agent and AgentTask) incur significant latency due to multiple database round-trips. Using Prisma's nested `create` reduces this to a single atomic operation.
**Action:** Always prefer nested `create` or `createMany` for bulk relationship insertions to minimize network overhead and ensure transaction atomicity.
