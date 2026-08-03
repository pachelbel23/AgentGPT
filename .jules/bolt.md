# Bolt's Performance Journal

## 2025-07-24 - Optimize Agent Creation Database Writes
**Learning:** In the T3 Stack with Prisma, sequential or parallel inserts using `Promise.all` over collections (such as saving multiple AgentTasks for a newly created Agent) result in N+1 database operations. This introduces severe write latency (often >200ms) even on local SQLite databases. Leveraging Prisma's nested create writes (e.g., `tasks: { create: ... }`) collapses the operation into a single transaction/query, resulting in an ~94% latency reduction (dropping database write time from ~219ms to ~13ms for 50 tasks).
**Action:** Always favor nested Prisma writes or `createMany` instead of sequential/parallel individual map/creates when persisting parent-child entity relations.

## 2025-07-24 - Database Schema Preservation in Benchmark Workflows
**Learning:** Modifying the database provider in `prisma/schema.prisma` (e.g., from `mysql` to `sqlite`) and stripping column attributes like `@db.Text` to run local benchmark scripts on SQLite represents a breaking architectural change if checked in. The removal of `@db.Text` can cause critical data truncation for production fields (like tokens, goals, or descriptions) on MySQL/PostgreSQL.
**Action:** When performing local SQLite benchmarks, ensure that `prisma/schema.prisma` is completely restored to its original production configuration, `prisma generate` is re-run, and all SQLite file artifacts, backups, and temporary benchmark scripts are removed and unstaged prior to committing.
