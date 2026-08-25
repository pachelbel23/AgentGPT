## 2025-07-24 - Prisma 1+N Nested Write Pattern

**Learning:** Creating parent records (e.g. `Agent`) followed by iterating `Promise.all(tasks.map(...))` results in 1+N roundtrips to the database. Using Prisma nested `create` bundles parent and child writes into a single atomic transaction and query.

**Action:** Prefer Prisma nested relational writes (`tasks: { create: [...] }`) when creating associated records to eliminate roundtrip overhead.
