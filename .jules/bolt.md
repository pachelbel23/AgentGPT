## 2025-05-14 - Batching Prisma Creates
**Learning:** Found a 1+N database call pattern in the agent creation mutation where tasks were being created individually after the agent. In environments with high database latency, this significantly slows down the response.
**Action:** Use Prisma's nested create (e.g., `tasks: { create: [...] }`) to ensure all related records are created in a single transaction and a single database roundtrip.
