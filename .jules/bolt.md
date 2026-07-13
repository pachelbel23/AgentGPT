## 2025-01-30 - [Nested Prisma Create Optimization]
**Learning:** Optimizing database writes from sequential 1+N calls to a single nested Prisma create significantly reduces latency (from ~255ms to ~15ms for 50 tasks on local SQLite).
**Action:** Always look for opportunities to use Prisma's nested write capabilities for related record creation to minimize database round-trips.

## 2025-01-30 - [Environment Integrity during Benchmarking]
**Learning:** Modifying the Prisma provider (e.g., to SQLite) or schema annotations (like @db.Text) for local benchmarking is a breaking architectural change if committed.
**Action:** Ensure all environment-specific changes to 'prisma/schema.prisma' and temporary artifacts like 'dev.db' are strictly reverted and UNSTAGED before submission.
