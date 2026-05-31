## 2025-05-22 - Use Prisma nested create to eliminate 1+N bottlenecks
**Learning:** The previous implementation of the 'create' mutation in 'agentRouter.ts' performed individual database calls for each task, leading to 1+N roundtrips. Prisma's nested 'create' allows batching these into a single transaction/roundtrip.
**Action:** Always look for opportunities to use nested Prisma operations for related records to reduce database latency and ensure atomicity.
