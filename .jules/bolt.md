## 2025-01-30 - [Nested Prisma Create Optimization]
**Learning:** Sequential database writes (1+N) are a significant bottleneck for bulk creations. Prisma nested writes (single `create` with `tasks: { create: [...] }`) reduce roundtrips and improve latency by ~90%+.
**Action:** Always prefer nested writes for parent-child relationship creation instead of sequential `create` calls within `Promise.all`.

## 2025-01-30 - [Environment Integrity]
**Learning:** Modifying the Prisma provider or schema properties (like `@db.Text`) for local benchmarking is a breaking change that must be strictly reverted before PR submission.
**Action:** Double-check `git status` and `git diff` to ensure `prisma/schema.prisma` is back to its original production configuration and no local DB files are staged.
