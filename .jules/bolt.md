## 2026-06-23 - Optimized agent creation with nested Prisma writes
**Learning:** Sequential database writes (1+N pattern) significantly increase latency, especially in cloud or containerized environments where each network round-trip adds overhead. Prisma's nested `create` allows batching these operations into a single transaction/command, reducing latency by ~90% (from ~187ms to ~17ms for 50 tasks in a local SQLite benchmark).
**Action:** Always prefer Prisma's nested CRUD operations over sequential `create`/`update` calls when handling related models.
