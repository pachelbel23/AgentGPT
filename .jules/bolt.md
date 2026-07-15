## 2025-01-30 - [Nested Prisma Create Optimization]
**Learning:** Sequential Prisma create calls for related models (1+N writes) cause significant latency due to multiple database roundtrips. Using nested creates bundles these into a single transaction/operation.
**Action:** Always prefer nested Prisma creates/connects for related data to minimize roundtrips and ensure atomicity.

## 2025-01-30 - [Prisma CLI Version Mismatch]
**Learning:** Using `npx prisma` may download the latest version (e.g. 7.x) which has breaking changes in schema datasource configuration (e.g. `url` property moved).
**Action:** Use `./node_modules/.bin/prisma` or ensure the local `prisma` package version matches the schema requirements.
