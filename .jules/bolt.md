## 2026-08-24 - Set vs Array includes for task lookup
**Learning:** Unconditionally constructing `new Set(array)` inside a repeatedly called helper adds overhead for small arrays (< 30 elements) due to heap allocations.
**Action:** Use conditional Set lookup based on array length (`array.length > 30`) to get $O(1)$ scaling for large lists without paying Set allocation costs for small ones.
