## 2025-05-15 - [Database] Optimize Agent Creation with Nested Prisma Creates
**Learning:** The `create` mutation for agents was following a 1+N database call pattern, where the agent was created first, followed by N separate calls for each task. This is an anti-pattern in Prisma that increases latency and risks partial failures.
**Action:** Use Prisma's nested `create` syntax to batch related record creation into a single database transaction/roundtrip. Ensure `protectedProcedure` context is leveraged to avoid redundant optional chaining on user IDs.
