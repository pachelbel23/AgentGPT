## 2025-05-14 - Optimized Agent Creation with Nested Prisma Create

**Learning:** Using Prisma's nested `create` feature significantly reduces database latency for complex objects with relationships. In this codebase, creating an agent with 50 tasks went from ~245ms (1+N round-trips) to ~16ms (1 round-trip) on SQLite, representing a ~93% performance improvement. This optimization also ensures atomicity and simplifies error handling.

**Action:** Prefer Prisma's nested write operations (create, update, upsert) over sequential individual operations whenever possible to minimize database round-trips and ensure transactional integrity.
