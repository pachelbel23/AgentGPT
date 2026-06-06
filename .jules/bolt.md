## 2026-06-06 - [Optimized Agent Creation]
**Learning:** Using Prisma's nested `create` instead of individual `create` calls within a `Promise.all` can reduce database latency by over 90% for operations involving multiple related records. This optimization also guarantees atomicity at the database level.
**Action:** Always prefer Prisma's nested write operations (nested `create`, `connectOrCreate`, `update` with nested `create/update`) over multiple top-level operations when dealing with 1:N or M:N relationships to minimize round-trips and ensure transactional integrity.
