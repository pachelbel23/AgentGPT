## 2025-05-14 - Optimize database writes with createMany
**Learning:** Found an N+1 write pattern in the agent creation logic where each task was being inserted individually using `prisma.agentTask.create` within a `Promise.all`. This results in N database roundtrips.
**Action:** Replaced the loop with a single `prisma.agentTask.createMany` call, reducing the complexity of task persistence from O(N) to O(1) database queries.
