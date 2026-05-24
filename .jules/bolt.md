## 2026-05-24 - [Database Optimization]
**Learning:** The `agentRouter.ts` was using a 1+N query pattern for creating agents and tasks, causing multiple database roundtrips.
**Action:** Use Prisma's nested `create` to handle relational data in a single transaction and reduce network overhead.
