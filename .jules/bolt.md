## 2025-07-24 - [Agent Creation Database Optimization]
**Learning:** Sequential Prisma create calls in a map (1+N writes) create high latency. Nested creates within a single Prisma call drastically reduce database roundtrips and ensure atomicity.
**Action:** Use Prisma's nested write capability (`create` with nested `createMany` or `create` with nested `create` for relations) to execute operations in a single database transaction.
