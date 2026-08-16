## 2025-07-24 - Batching relational inserts with nested Prisma writes
**Learning:** Performing sequential $1 + N$ database writes using `Promise.all(tasks.map(...))` creates significant latency overhead and connection pool contention. Using nested Prisma writes (`data: { tasks: { create: ... } }`) executes the write in a single database round-trip and transaction.
**Action:** Always prefer nested Prisma creates/updates when writing parent-child entities simultaneously.
