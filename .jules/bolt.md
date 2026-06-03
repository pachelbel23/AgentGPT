## 2025-05-22 - Optimized Agent Creation ($1+N$ bottleneck)
**Learning:** The agent creation process was using sequential database calls to create an agent and its associated tasks, leading to $1+N$ database round-trips. This caused significant latency, especially as the number of tasks increased. Prisma's nested `create` can consolidate these into a single atomic operation.
**Action:** Always look for opportunities to use Prisma nested writes for related models to reduce database round-trips and ensure atomicity.
