## 2025-07-24 - Set Allocation vs Array.includes for Small Collection Lookups

**Learning:** Unconditionally constructing a `new Set(array)` inside a frequently called function (like `extractTasks`) adds ~4.4x execution overhead for small arrays (< 30 elements) compared to `Array.prototype.includes`. The heap allocation and hash bucket initialization cost of `new Set` outweighs the linear scan overhead of `Array.prototype.includes` for small collections in V8.

**Action:** Only instantiate a `Set` for membership checks if the collection size is large (e.g. >= 30 elements) or if the `Set` can be initialized once and reused across invocations.
