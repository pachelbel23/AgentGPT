## 2025-07-24 - Hoist RegExp allocations and optimize lookup strategy in helpers
**Learning:** Re-instantiating RegExp objects inside frequently called utility functions like `extractTasks` and `realTasksFilter` causes unnecessary allocation and parsing overhead (~2.3x slower). Moreover, unconditionally allocating `new Set()` for small arrays (<30 elements) introduces heap overhead compared to native `Array.prototype.includes`.
**Action:** Always hoist RegExp objects to module level constants in utility modules and conditionally use `Set` only for large arrays (>30 elements).
