## 2025-07-24 - [Prisma Nested Create vs Sequential Writes]
**Learning:** Using Prisma's nested `create` instead of sequential `1+N` writes significantly reduces database round-trips and improves latency. In this codebase, it reduced agent creation time from ~270ms to ~15ms (a ~94% improvement) on local SQLite.
**Action:** Always prefer nested Prisma writes for parent-child relationship creation to ensure atomicity and optimize performance.

## 2025-07-24 - [Environment Hygiene]
**Learning:** Running scripts like `useSqlite.sh` can modify the schema and create backup files (like `schema.prismae`) that might accidentally be staged for commit.
**Action:** Always run `git status` and verify file contents before submission to ensure only intended changes are included and no architectural regressions (like changing the DB provider) are introduced.
