## 2025-05-22 - [Optimized Agent Creation with Prisma Nested Writes]
**Learning:** Using Prisma nested `create` for 1-to-N relationships significantly reduces database round-trips from 1+N to 1, improving performance by ~94% (from ~215ms to ~13ms for 50 tasks in a local SQLite benchmark).
**Action:** Always prefer Prisma's nested write capabilities over sequential `Promise.all` of individual creates for related records.
