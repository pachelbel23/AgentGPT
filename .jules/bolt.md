## 2026-07-10 - [Optimization of Agent Creation with Nested Prisma Writes]
**Learning:** Using Prisma's nested create (`tasks: { create: [...] }`) reduces database round-trips from 1+N to 1 and ensures atomicity. This significantly improves performance for bulk operations, reducing latency from ~216ms to ~13ms for 50 tasks on SQLite.
**Action:** Always prefer nested writes over sequential loops with `Promise.all` for parent-child relationship creation in Prisma.

## 2026-07-10 - [Prisma Schema Validation Error P1012]
**Learning:** Running `npx prisma` may install a newer version (e.g., 7.x) than the one in the project (4.x), leading to validation errors (P1012) due to schema syntax changes (like the `url` property in `datasource`).
**Action:** Use the project's local binary via `./node_modules/.bin/prisma` or ensure `npm install` has been run and use `npx prisma` which should then pick up the local version.
