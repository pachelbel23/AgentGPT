# Bolt's Performance Journal

## 2025-07-24 - Combobox Option Filtering Optimization
**Learning:** Hoisting `query.toLowerCase()` outside array `.filter()` loops in `Combobox` avoids $N-1$ redundant string transformations per filter pass. Combining this with `useMemo` prevents unnecessary array filtering operations on component re-renders.
**Action:** Always hoist query transformations outside filtering loops in React UI components and memoize array filtering results with `useMemo`.
