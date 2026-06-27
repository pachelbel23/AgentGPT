## 2025-05-15 - [Nested Prisma Writes Optimization]
**Learning:** Replacing sequential 1+N database writes (even with `Promise.all`) with a single nested Prisma `create` call yielded a ~93% reduction in latency (from 243ms to 16ms for 50 records) on SQLite. This also guarantees database atomicity without manual transaction management.
**Action:** Always favor nested Prisma writes or `createMany` (if same model) when persisting parent-child relationships to minimize database round-trips.

## 2025-05-15 - [Prisma CLI Versioning Conflict]
**Learning:** Running `npx prisma` without a specific version may default to the latest (e.g., 7.x), which triggers P1012 validation errors if the `schema.prisma` uses syntax deprecated since the project's locked version (e.g., 4.x).
**Action:** Use the project's local binary or ensure `npm install` is run before `npx prisma` to maintain version compatibility with the existing schema.
