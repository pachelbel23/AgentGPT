## 2025-07-24 - Memoize Combobox option filtering & hoist lowercasing
**Learning:** In React components filtering lists based on user input queries, performing `.filter()` and `query.toLowerCase()` on every render without `useMemo` leads to redundant computations during unrelated parent re-renders and $O(N)$ string lowercasing operations per filter pass.
**Action:** Always wrap filter computations in `useMemo` with minimal dependencies `[options, query]` and hoist string transformations like `.toLowerCase()` outside array iteration loops.
