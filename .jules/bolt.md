## 2025-05-15 - [Prisma N+1 Write Anti-pattern]
**Learning:** The `agentRouter` used sequential `prisma.create` calls for Agent and AgentTasks, leading to 1+N database round-trips. This was a major bottleneck in agent creation latency (~97ms for 20 tasks on SQLite).
**Action:** Always use Prisma nested `create` for parent-child relationships to ensure atomicity and reduce round-trips to 1, which yielded a ~91% performance improvement.
