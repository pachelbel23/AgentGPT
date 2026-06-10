## 2025-01-24 - [Database Write Latency Optimization]
**Learning:** Using separate Prisma create calls for an entity and its children (1+N writes) in a tRPC mutation caused significant latency (~113ms for 20 tasks on SQLite). Prisma's nested `create` reduces this to a single round-trip, improving performance by ~90% (~11ms).
**Action:** Always prefer Prisma's nested writes for parent-child relationships to ensure atomicity and minimize database round-trips.
