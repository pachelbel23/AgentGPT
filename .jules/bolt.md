## 2026-07-11 - Optimize database writes with Prisma nested creates
**Learning:** Sequential database writes (1+N) are significantly slower than a single nested Prisma create operation. In this environment, batching 50 task creations into the agent creation reduced latency from ~172ms to ~14ms (~92% improvement).
**Action:** Always look for opportunities to use Prisma's nested write capabilities (create, connect, etc.) to reduce database round-trips and ensure atomicity.
