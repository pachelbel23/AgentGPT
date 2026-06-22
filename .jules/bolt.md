## 2025-01-30 - [Nested Create Optimization]
**Learning:** Sequential 1+N database writes are significantly slower than a single nested create, especially in environments like SQLite. Benchmarking showed a reduction from ~300ms to ~12ms for 50 tasks.
**Action:** Use Prisma's nested create feature for parent-child relationship insertions to minimize database round-trips and ensure atomicity.
