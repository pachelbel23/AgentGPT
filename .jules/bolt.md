## 2025-07-24 - Nested Prisma Creates
**Learning:** Performing sequential inserts in a loop or Promise.all (1+N write pattern) for related entities creates huge database overhead and round-trip latencies, whereas Prisma's nested create write combines multiple inserts into a single atomic transaction.
**Action:** Always prefer nested write operations in Prisma when creating a parent record along with its associated child items, in order to guarantee database-level atomicity and minimize query round-trip latency.
