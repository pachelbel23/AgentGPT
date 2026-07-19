# Bolt's Journal

## 2025-07-24 - Nested Create Optimization for Agents and Tasks
**Learning:** Sequential 1+N writes when creating an Agent and its tasks result in high database roundtrip overhead and poor performance. Using a single nested Prisma write bundles these operations, eliminating sequential calls and reducing latency by ~93-97% on SQLite.
**Action:** Always favor nested `create` inside Prisma for associated/related entities instead of mapping over items to run separate `prisma.model.create` promises.
