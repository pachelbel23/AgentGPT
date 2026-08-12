## 2025-07-24 - Batching Database Writes with Nested Prisma Queries
**Learning:** Sequentially creating database records inside a loop or mapping function creates an N+1 write bottleneck, which is slow and lacks atomicity. Using nested Prisma writes compiles down to efficient queries and ensures atomic execution.
**Action:** Always prefer nested Prisma transactions (`create` with `create` inside relational models) over sequential queries with `Promise.all` for relational records.

## 2025-07-24 - React Component Memoization
**Learning:** Frequent updates to complex chat streams and task lists can cause all items in the list to re-render, leading to O(N) rendering overhead and UI sluggishness. Memoizing individual items avoids redundant re-renders.
**Action:** Wrap individual chat message and task components in `React.memo` with explicit `displayName`s to prevent unnecessary DOM updates.
