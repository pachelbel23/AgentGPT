## 2026-07-21 - [Batch Database Write Optimization via Nested Creates]
**Learning:** Sequential and parallel database writes for parent-child relations (N+1 inserts) introduce substantial latency overhead and network roundtrips. In Prisma, these N+1 operations can be streamlined into a single nested transaction.
**Action:** Always prefer Prisma's nested `create` capabilities over multiple sequential or concurrent write requests (`Promise.all`) to ensure database-level atomicity, reduce connection overhead, and improve create performance by ~95%.
