## 2025-07-24 - Hoisting Query Lowercasing and Memoizing Options in Combobox
**Learning:** Re-evaluating `query.toLowerCase()` on every iteration of `.filter()` inside a React render loop causes $O(N)$ string allocations per render. Memoizing with `useMemo` and hoisting the lowercased query outside the filter loop avoids redundant allocations and prevents recalculation when unrelated props change.
**Action:** When filtering options in React input/combobox components, always memoize the filtered result and hoist query string transformations outside the array iteration loop.
