## 2025-05-14 - [Prisma Nested Create vs. Promise.all]
**Learning:** Using nested `create` in Prisma is more efficient than `Promise.all` for related records as it executes in a single database roundtrip and transaction.
**Action:** Always prefer nested Prisma `create` when saving related entities to reduce latency and ensure atomicity.

## 2025-05-14 - [React.memo for Lists]
**Learning:** List-heavy components like chat messages benefit significantly from `React.memo` to prevent O(N) re-renders when a single item is appended.
**Action:** Use `React.memo` for list item components and remember to set `displayName` for better debugging and to satisfy lint rules.
