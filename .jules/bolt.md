## 2025-07-24 - Hoisting RegExp & Set vs Array includes
**Learning:** Unconditionally constructing `new Set(array)` inside a repeatedly called function adds ~4.4x execution overhead for small arrays (< 30 elements) compared to `Array.prototype.includes` in V8 due to heap allocation costs. Hoisting RegExp definitions outside function scope prevents repeated allocations and saves execution time.
**Action:** Always hoist RegExp objects to module scope and set a threshold (e.g. > 30 elements) before converting arrays to `Set` for lookups.
