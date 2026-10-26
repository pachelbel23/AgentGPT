# Bolt's Performance Journal

## 2025-07-24 - Nested Prisma Creates for Agent and Tasks
**Learning:** In Prisma with relational databases (MySQL/SQLite), sequentially creating a parent entity (`Agent`) and then executing a `Promise.all` map of `prisma.child.create` calls leads to N+1 network roundtrips/database writes. Replacing this with a single nested `create` ({ tasks: { create: [...] } }) bundles parent and child writes into a single atomic query transaction.
**Action:** Always prefer nested relational writes (`tasks: { create: [...] }`) when persisting hierarchical parent-child entities in tRPC mutations.
