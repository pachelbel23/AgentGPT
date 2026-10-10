## 2025-07-24 - Combobox Filter Memoization and Lowercase Hoisting
**Learning:** In React list filtering callbacks, evaluating `query.toLowerCase()` inside `.filter()` recalculates string lowercasing N times per render. Hoisting `query.toLowerCase()` outside the loop and memoizing `filteredOptions` with `useMemo` prevents unnecessary CPU overhead on re-renders.
**Action:** When filtering arrays based on user input queries, always hoist invariant operations (like lowercasing) out of `.filter()` and memoize the computed result with `useMemo`.
