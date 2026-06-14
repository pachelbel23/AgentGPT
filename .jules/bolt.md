## 2025-05-15 - [Database write optimization for agent creation]
**Learning:** Agent creation was performing 1+N database writes (one for the agent, and one for each task), causing significant latency (~171ms for 20 tasks on SQLite). Using Prisma's nested `create` reduces this to a single operation, improving performance by ~95% (~8ms).
**Action:** Always prefer Prisma nested writes or `createMany` for bulk insertions to minimize database round-trips.
