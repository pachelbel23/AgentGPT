# Bolt's Performance Journal ⚡

## 2025-01-24 - Initializing Bolt
**Learning:** Bolt is here to make things fast. I've identified a potential bottleneck in the `agentRouter.ts` where database writes for agent tasks are done sequentially.
**Action:** I will benchmark and optimize this using Prisma's nested creates.

## 2025-01-24 - Prisma Nested Create Optimization
**Learning:** Sequential writes for related models (1+N) in Prisma are significantly slower than nested creates.
**Action:** On SQLite, optimizing from sequential writes to a single nested create for 50 tasks reduced latency from ~260ms to ~17ms (~94% improvement). Always prefer nested creates for atomicity and performance.
