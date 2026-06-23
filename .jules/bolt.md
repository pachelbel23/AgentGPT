## 2025-01-24 - Prisma Nested Create Optimization
**Learning:** Sequential database writes for related records (1+N pattern) cause significant latency due to multiple database round-trips, even when wrapped in `Promise.all`. Prisma's nested `create` feature batches these into a single database transaction/round-trip.
**Action:** Use Prisma nested writes for creating related records to reduce database latency from O(N) round-trips to O(1).
