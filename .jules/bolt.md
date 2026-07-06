## 2025-07-22 - Optimize agent creation with nested Prisma write
**Learning:** Sequential 1+N database writes for parent-child relations can be significantly optimized using Prisma's nested create feature. In this codebase, creating an agent with 50 tasks went from ~262ms to ~13ms on local SQLite.
**Action:** Always prefer nested writes for related records to reduce database round-trips and ensure atomicity.
