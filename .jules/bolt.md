## 2025-05-14 - [Nested Prisma Create Optimization]
**Learning:** Refactoring sequential database writes (1+N) into a single nested Prisma create call significantly improves performance by reducing database round-trips and ensuring atomicity. In a simulated environment with SQLite, latency for 50 tasks dropped from ~208ms to ~15ms (~93% improvement).
**Action:** Always prefer Prisma's nested create/update operations for parent-child relationships to minimize database overhead and guarantee transactional integrity.
