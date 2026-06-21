## 2025-05-15 - [Nested Prisma Create]
**Learning:** Sequential 1+N database writes using `Promise.all` still incur significant latency overhead due to multiple round-trips. Prisma's nested `create` syntax allows for a single atomic transaction and one round-trip.
**Action:** Always prefer Prisma nested `create` or `connectOrCreate` for parent-child relationship insertions to minimize database latency.
