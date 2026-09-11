## 2025-07-24 - Unconditional Set Construction Overhead
**Learning:** Constructing `new Set(array)` inside a repeatedly called function for small arrays (< 30 items) adds ~4.4x execution overhead in V8 compared to `Array.prototype.includes` due to object allocation overhead.
**Action:** Use `Array.prototype.includes` for small collections or reuse existing Sets/Maps rather than creating temporary Sets inside hot loops.
