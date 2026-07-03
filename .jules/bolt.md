## 2025-07-02 - Optimized agent creation with nested Prisma writes
**Learning:** Sequential database writes (1+N) for relational data can significantly impact latency, especially when network overhead is involved. Prisma's nested `create` optimization allows batching these into a single database round-trip, improving atomicity and performance. In a local SQLite benchmark, this reduced latency for 50 tasks from ~205ms to ~16ms (~92% reduction).
**Action:** Always prefer nested Prisma writes or transactions when creating records with related child entities to minimize database round-trips.
