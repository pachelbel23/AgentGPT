# Bolt's Journal - Critical Learnings

## 2025-07-24 - Unconditional Set Creation vs Array.includes
**Learning:** Unconditionally constructing `new Set(array)` inside a repeatedly called function adds ~4.4x execution overhead for small arrays (< 30 elements) compared to `Array.prototype.includes` in V8 due to heap allocation costs.
**Action:** Keep `.includes()` or check array length before creating a Set for lookup operations in hot code paths.
