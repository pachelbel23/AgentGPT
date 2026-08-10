## 2026-08-09 - [Optimizing Agent and Task Creation with Nested Prisma Writes]
**Learning:** Sequential database writes inside a single mutation (1 Agent create + N AgentTask creates) trigger N+1 round trips, resulting in severe performance overhead and potential orphaned records in case of write failure.
**Action:** Use single nested Prisma writes to combine parent and related child records into a single transaction.
