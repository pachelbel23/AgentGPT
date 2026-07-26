## 2025-07-24 - [Nested Prisma Create Optimization]
**Learning:** Optimizing the 'create' mutation in 'src/server/api/routers/agentRouter.ts' using nested Prisma writes reduced latency for 50 tasks from 351ms to 15ms (~95.7% improvement) on local SQLite.
**Action:** When creating parent-child relationships (like Agent and Tasks), use nested relation writes instead of sequential queries to ensure atomicity and dramatic performance gains.
