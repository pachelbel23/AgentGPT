## 2025-07-24 - Batch Creation via Nested Prisma Write vs Sequential 1+N Creates

**Learning:** Creating associated models via sequential array maps (`Promise.all(tasks.map(...))`) introduces severe 1+N database round-trip overhead (taking ~318ms for 50 tasks). Using Prisma's nested relational write (`tasks: { create: [...] }`) executes the write in a single batch operation/transaction, reducing latency to ~15ms (~95% speedup).

**Action:** Whenever creating parent models with multiple child records in tRPC routers or Prisma queries, always use nested relational `create` or `createMany` instead of mapping over individual create operations.
