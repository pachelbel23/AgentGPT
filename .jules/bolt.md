## 2025-01-30 - Prisma Nested Create Optimization
**Learning:** Replacing sequential 1+N database writes with a single nested Prisma create operation significantly reduces latency and ensures atomicity. In this codebase, for 50 tasks, latency dropped from ~236ms to ~15ms (a ~93.6% improvement) on local SQLite.
**Action:** Always prefer nested Prisma writes for parent-child relationships to minimize database round-trips.
