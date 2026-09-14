## 2025-07-24 - Nested Prisma Creates for Batch Data Relations
**Learning:** Using `Promise.all` with multiple individual `prisma.<model>.create` calls executes $1 + N$ separate database queries and round-trips over the connection pool. Refactoring to a single nested Prisma write (`tasks: { create: [...] }`) bundles the creation into 1 operation, guaranteeing atomic execution and eliminating $N$ network round-trips.
**Action:** Inspect router handlers and API endpoints for $1 + N$ Prisma write patterns and convert them into single nested relation creates or `createMany`.
