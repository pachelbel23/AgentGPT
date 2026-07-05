## 2025-07-02 - [Prisma nested create optimization]
**Learning:** Sequential 1+N writes in Prisma for parent-child relations can be significantly slower than a single nested create operation. In this environment (SQLite/Node), the overhead of multiple `prisma.create` calls for 50 tasks was ~366ms, whereas a single nested create took only ~18ms.
**Action:** Always prefer nested Prisma writes (e.g., `tasks: { create: [...] }`) over multiple sequential `prisma.create` calls to reduce database round-trips and improve atomicity.
