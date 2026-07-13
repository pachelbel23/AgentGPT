## 2025-01-30 - Optimize agent creation with nested Prisma writes
**Learning:** Sequential database writes (1+N) for relational data can significantly increase latency and database load. Prisma's nested `create` allows batching these into a single transaction/query.
**Action:** Always prefer nested Prisma writes over sequential `create` calls for parent-child relationships like Agents and Tasks. In this case, it reduced latency for 50 tasks from 166ms to 14ms (~91.5% improvement) on local SQLite.
