# Bolt's Performance Journal - Critical Learnings

## 2025-07-24 - [Combobox Option Filtering Optimization]
**Learning:** In React list filtering components like Combobox, calling `query.toLowerCase()` inside `Array.prototype.filter()` callback causes $N$ string lowercasing operations per filter run, and re-computes on unrelated component renders if not memoized.
**Action:** Hoist invariant computations like `query.toLowerCase()` outside the `.filter` loop and wrap `filteredOptions` in `useMemo` with `[options, query]` dependencies.
