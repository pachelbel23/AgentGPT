## 2025-07-25 - Module-Scoped RegExp Hoisting & Fast-Path Short-Circuiting
**Learning:** Instantiating `RegExp` objects inside hot helper functions creates unnecessary heap allocations and GC overhead on every call. Furthermore, testing regex before checking string equality forces regular expression execution even for empty strings.
**Action:** Always hoist stateless `RegExp` instances to module scope and evaluate fast $O(1)$ equality checks (like `value === ""`) before regex evaluation.
