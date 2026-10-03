# Bolt's Performance Journal

## 2025-07-24 - Combobox Option Filtering Optimization
**Learning:** Computing string lowercasing inside array filter iterations (`opt.toLowerCase().includes(query.toLowerCase())`) causes O(N) lowercasing operations on every keypress.
**Action:** Always compute query lowercasing once outside the array iteration callback and wrap filtering computations in `useMemo`.
