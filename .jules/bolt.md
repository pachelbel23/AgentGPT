## 2025-07-24 - Hoist transform & memoize filter in UI components
**Learning:** In interactive input components like `Combobox`, performing string transformations (e.g. `.toLowerCase()`) inside `.filter()` loops causes unnecessary $O(N)$ string allocations per keystroke/re-render.
**Action:** Always hoist invariant search target transformations out of array loops and wrap computed option lists in `useMemo`.
