## 2025-07-24 - Task Parsing Regex Hoisting & Set Lookup

**Learning:** `extractTasks` and `realTasksFilter` are invoked repeatedly during Agent loop steps. Creating `RegExp` objects inside `realTasksFilter` and `extractArray` on every call caused unnecessary object allocations and regex re-compilations. In addition, checking task completion exclusion using `Array.prototype.includes` within an `Array.prototype.filter` loop resulted in O(N * M) time complexity.
**Action:** Always hoist stateless regular expressions to module scope and convert array lookup lists into `Set` instances for O(1) membership checks in iterative utility functions.
