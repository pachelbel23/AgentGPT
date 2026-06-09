## 2026-06-09 - [Optimizing Agent Persistence and Rendering Performance]
**Learning:** Transitioning from multiple sequential database writes to a single nested Prisma `create` significantly reduces latency by minimizing round-trips. Memoizing list items (`ChatMessage`, `Task`) and expensive computations (`useMemo` for filters) prevents UI jank in long-running sessions as state grows.
**Action:** Always prefer nested creates for parent-child relationships in Prisma. Proactively memoize list items and heavy filtered views to ensure scalability of the UI.
