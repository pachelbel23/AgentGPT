## 2025-05-22 - Prisma Nested Create Optimization
**Learning:** Sequential database insertions (even if wrapped in Promise.all) create N+1 round-trips to the database, which significantly increases latency compared to a single nested create operation. Prisma's nested create is also atomic by default.
**Action:** Always prefer Prisma nested writes over separate top-level creates for related models to ensure atomicity and reduce database round-trip overhead.
