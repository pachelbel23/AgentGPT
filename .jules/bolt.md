# Bolt's Journal - Critical Learnings

## 2025-07-24 - Combobox option filtering optimization
**Learning:** In React components rendering filtered option lists (like Combobox), evaluating `query.toLowerCase()` inside `Array.prototype.filter()` repeatedly allocates lowercased strings per element on every render cycle.
**Action:** Use `useMemo` to cache filtered options and hoist string normalization (e.g. `query.toLowerCase()`) outside the iteration loop.
