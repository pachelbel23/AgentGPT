## 2025-07-24 - Memoizing Combobox filtering and hoisting lowercasing
**Learning:** In list filter operations on user input in Combobox components, calling `.toLowerCase()` on the query inside the `.filter()` loop causes $O(N)$ string transformations per input change, and unmemoized filter results trigger unnecessary re-computations on unrelated component renders.
**Action:** Always memoize filter results using `useMemo` and hoist query transformations like `.toLowerCase()` outside the array filter iteration.
