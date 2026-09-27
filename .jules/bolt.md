## 2026-09-27 - Module-scoped RegExp and Threshold-based Set Lookup Optimization
**Learning:** Instantiating regular expressions inside frequently called helper functions creates unnecessary allocation overhead and garbage collection pressure in V8. Furthermore, unconditionally creating `new Set()` for array lookup optimization adds allocation overhead on small arrays (< 10 elements) where `Array.prototype.includes` is faster.
**Action:** Always hoist stateless regular expressions to module scope, and use conditional Set construction based on array length thresholds.
