## 2025-07-24 - Hoist RegExp Allocations & Conditional Set Lookup Overhead

**Learning:** Unconditionally constructing `new Set(array)` inside a repeatedly called function adds ~4.4x execution overhead for small arrays (< 30 elements) compared to `Array.prototype.includes` in V8 due to heap allocation costs. However, hoisting module-level `RegExp` objects eliminates redundant regular expression compilation overhead across executions.

**Action:** Always hoist static `RegExp` objects to module scope and conditionally gate `Set` creation (`array.length > 20`) when filtering arrays in hot paths.
