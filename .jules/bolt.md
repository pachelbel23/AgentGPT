## 2025-01-27 - Optimized Agent Creation with Nested Prisma Writes
**Learning:** Sequential 1+N writes in Prisma for creating an agent and its tasks cause significant latency due to multiple database round-trips. Using nested `create` reduces this to a single operation.
**Action:** Always prefer nested Prisma creates/connects for related records to minimize database overhead, especially in tRPC mutations.
