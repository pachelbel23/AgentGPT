## 2025-05-15 - Prisma N+1 creation bottleneck
**Learning:** Performing multiple individual `prisma.create` calls in a loop (1+N pattern) introduces significant latency due to repeated database round-trips. In this codebase, creating an agent with 20 tasks took ~130ms.
**Action:** Use Prisma nested `create` (e.g., `agent.create({ data: { ..., tasks: { create: [...] } } })`) to batch the operation into a single transaction/round-trip. This reduced latency to ~10ms, a ~92% improvement.
