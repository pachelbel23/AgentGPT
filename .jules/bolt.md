## 2025-05-14 - [Database Optimization: Nested Prisma Creates]
**Learning:** Using Prisma's nested create feature significantly reduces database round-trips from 1+N to 1. In this codebase, creating an agent with 20 tasks was optimized from ~242ms to ~9ms on SQLite, a ~96% improvement.
**Action:** Prefer nested writes in Prisma when creating related records to ensure atomicity and reduce latency.

## 2025-05-14 - [Environment Management: Dependency Versions]
**Learning:** Running 'npx prisma@<version> generate' can cause unintentional modifications or downgrades in 'package-lock.json' if the requested version differs from the locked version.
**Action:** Prefer using the project's installed binary via 'npx prisma generate' and always verify the lockfile status after environment-related commands.
