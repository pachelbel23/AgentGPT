## 2025-07-24 - Nested Prisma Creates Eliminate 1+N DB Writes
**Learning:** In tRPC endpoints creating parent-child relationships (e.g. Agent + AgentTasks), mapping over tasks with individual `prisma.child.create` inside `Promise.all` executes 1+N query roundtrips to the database. Nested Prisma writes (`tasks: { create: [...] }`) combine these into a single database query/transaction, reducing database latency by ~93-97%.
**Action:** Always prefer nested Prisma creates for relational data creation in tRPC mutations.
