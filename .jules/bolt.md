## 2025-05-14 - Prisma nested create optimization
**Learning:** In this codebase, saving an agent with its tasks using sequential `prisma.create` calls (1+N) is significantly slower (~277ms for 50 tasks) than using a single nested `create` (~14ms). The nested create also ensures atomicity.
**Action:** Always prefer nested Prisma writes for parent-child relationships to reduce database round-trips and ensure data consistency.
