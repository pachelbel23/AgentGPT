## 2025-07-24 - Unconditional Set construction overhead on small arrays
**Learning:** Instantiating `new Set(array)` unconditionally inside a loop or filter callback on small arrays (< 30 elements) introduced ~10% performance overhead in V8 compared to `Array.prototype.includes`, due to object allocation overhead.
**Action:** Always benchmark collection lookup strategies on small arrays before replacing `.includes()` with `Set`.
