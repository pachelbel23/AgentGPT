## 2026-07-28 - Optimize sequential writes and React lists
**Learning:** Sequential database writes in list/relationship creation lead to severe N+1 latency bottlenecks. Unmemoized item renders in React lead to O(N) re-render cascades, and missing dependency arrays in scroll-to-bottom layout effects trigger layout recalculations on every single render.
**Action:** Use Prisma's nested writes for multi-row creations in single transactions, memoize long-list child components with `React.memo` (with displayName set), and always set explicit dependency arrays for window scroll layouts.
