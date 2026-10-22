## 2025-07-24 - Module-Scoped RegExp Hoisting & Early Return Optimization
**Learning:** Instantiating `RegExp` objects inside frequently called utility functions like `isEmptyOrBlank` causes unnecessary memory allocations and RegExp compilation overhead on every invocation. Hoisting `RegExp` to module scope and adding early returns for common empty strings improves string parsing performance significantly.
**Action:** Always check string utility functions for inline RegExp instantiations or missing trivial case checks (`value === ""`) that can bypass regex evaluation.
