## 2025-06-04 - [Optimize agent creation with nested create]
**Learning:** Using Prisma's nested create feature significantly reduces database round-trips from 1+N to 1 when creating an entity and its multiple related entities. In the context of AgentGPT, this reduced agent creation latency from ~184ms to ~8ms for an agent with 20 tasks on SQLite.
**Action:** Always prefer nested creates and updates in Prisma when dealing with related entities to minimize database overhead and improve response times.
