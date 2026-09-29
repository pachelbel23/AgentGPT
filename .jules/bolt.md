## 2025-07-24 - Batch Creation Optimization in Prisma

**Learning:** Creating related entities with `Promise.all(items.map(item => prisma.child.create(...)))` issues 1+N distinct database queries and network round-trips. Replacing this pattern with Prisma's nested `create` feature (`children: { create: [...] }`) executes the write in a single database transaction, dramatically reducing latency (~92% reduction).

**Action:** Look for 1+N Prisma creation loops in tRPC routers and replace them with nested Prisma writes.
