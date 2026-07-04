## 2026-07-04 - Optimize Agent Creation with Prisma Nested Writes
**Learning:** Sequential 1+N database writes (one for parent, N for children) are significantly slower than a single nested Prisma create, especially as N increases. On local SQLite, this optimization reduced latency for 50 tasks from ~333ms to ~16ms.
**Action:** Always prefer Prisma nested writes or transactions for related entity creation to minimize database round-trips.
