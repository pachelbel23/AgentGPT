## 2025-07-24 - Module-scoped RegExp Hoisting in Task Helpers

**Learning:** Declaring `RegExp` literals inside frequently called helper functions (such as `realTasksFilter` and `extractArray`) creates temporary RegExp objects on every call, leading to unnecessary memory allocations and garbage collection overhead (~21% execution time difference over 500k iterations).

**Action:** Hoist stateless regular expressions without stateful flags (`/g` or `/y`) to top-level module constants when used in hot path functions.
