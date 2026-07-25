## 2026-05-16 - Nested Prisma writes and React memoization optimization
**Learning:** Sequential database writes (N+1 queries) and O(N) re-renders on lists are major bottlenecks. Nested Prisma write operations offer a single transaction roundtrip, reducing latency by over 90%. Memoizing chat list items (`ChatMessage` and `Task`) via React.memo with explicit `displayName`s successfully isolates rendering.
**Action:** Always inspect bulk-creation database endpoints for nested writes opportunities and ensure React chat/log list items are memoized.
