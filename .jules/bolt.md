## 2026-06-15 - [Optimize Agent Creation with Nested Writes]
**Learning:** Prisma nested creates are significantly faster than individual `1+N` create operations. In a benchmark with 20 tasks, it reduced latency from ~205ms to ~10ms (~95% improvement).
**Action:** Prefer nested writes for parent-child relationship creation to reduce database round-trips and ensure atomicity.
