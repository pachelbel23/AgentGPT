## 2025-08-22 - Prisma Nested Writes vs N+1 Writes in Batch Mutations

**Learning:** Creating a parent record and multiple child records using sequential or concurrent `prisma.child.create` calls inside `Promise.all` issues N+1 separate database queries, causing severe latency overhead. Prisma supports nested writes (`parent.create({ data: { ..., children: { create: [...] } } })`) which bundles all insertions into a single atomic transaction.

**Action:** Whenever creating entities with related child items in tRPC routers, use nested `create` writes to ensure atomicity and avoid N+1 database roundtrips.
