## 2025-05-15 - Prisma Nested Create Optimization
**Learning:** Using Prisma's nested `create` instead of multiple individual `create` calls for related records significantly reduces database round-trips and improves performance by an order of magnitude (e.g., from 185ms to 17ms for 50 tasks). It also ensures atomicity by wrapping the operation in a single transaction.
**Action:** Always prefer nested writes in Prisma when creating a parent record along with its children to minimize latency and ensure data consistency.
