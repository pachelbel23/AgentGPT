## 2026-06-06 - [Database optimization via nested create]
**Learning:** Using Prisma's nested `create` significantly outperforms multiple individual `create` calls within `Promise.all`. For 20 tasks, latency dropped from ~110-184ms to ~8-16ms. This is because nested `create` results in a single database transaction and fewer round-trips.
**Action:** Always prefer nested `create` or `createMany` when persisting parent-child relationships in Prisma.

## 2026-06-06 - [Accidental staging of binary and backup files]
**Learning:** Running database setup scripts (like `./prisma/useSqlite.sh`) can create binary databases (`dev.db`) and backup files (`schema.prismae`) that might be accidentally staged.
**Action:** Explicitly check for and remove temporary database artifacts in the `prisma/` directory before finalizing a PR.
