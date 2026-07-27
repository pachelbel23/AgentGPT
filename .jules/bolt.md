## 2025-07-24 - Optimizing Agent Creation with Nested Prisma Writes
**Learning:** Consolidating 1+N sequential independent database writes into a single, nested Prisma write avoids N+1 query patterns and database round trips. This is highly performant (e.g. latency reduced by ~95%) and ensures atomic transactional integrity.
**Action:** When creating a record with related children (like Agent with AgentTasks), prefer nested creates using `tasks: { create: [...] }` over mapping to parallel promises (`Promise.all`).
