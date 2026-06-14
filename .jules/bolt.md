## 2025-01-24 - [Optimizing Agent Persistence]
**Learning:** Prisma's 1+N write pattern for parent-child relations (e.g., Agent and AgentTask) is significantly slower than nested `create` due to multiple database round-trips. Benchmarks on SQLite showed a latency reduction from ~170ms to ~8ms for 20 tasks.
**Action:** Always prefer Prisma nested `create` or `createMany` for bulk insertions to ensure atomicity and minimize network/disk overhead.

## 2025-01-24 - [React Component Memoization]
**Learning:** In long-running agent loops, components like `ChatMessage` and `Task` are frequently re-rendered as new items are added to the list, even if their own props haven't changed.
**Action:** Use `React.memo` for list items in highly dynamic UI components to eliminate redundant render cycles and improve interface responsiveness.
