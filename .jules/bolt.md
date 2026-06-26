## 2026-06-26 - Optimized Database Writes and Frontend Rendering

**Learning:** Replacing sequential database creates with a single nested Prisma create reduced latency by ~96% (from 411ms to 16ms for 50 tasks) on SQLite. Memoizing expensive O(N) array filtering in the main render loop prevents unnecessary recalculations during user input.

**Action:** Always check if multiple related records can be created in a single nested write. Use `useMemo` for any O(N) or more complex logic that depends on state that doesn't change frequently during standard interactions like typing.
