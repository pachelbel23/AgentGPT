## 2025-07-24 - Hoisting RegExp objects in helper parsing utilities
**Learning:** Instantiating `RegExp` objects inside helper utility functions called inside loops or array filters (e.g. `extractArray`, `realTasksFilter`) causes repeated allocations and regex re-compilation on every element. Hoisting RegExp objects to module-scoped constants improves filtering execution speed by ~25-30%.
**Action:** Always check helper functions and array callbacks for inline `RegExp` literal creations without global/sticky flags and hoist them to top-level module constants.
