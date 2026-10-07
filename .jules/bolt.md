## 2025-07-24 - Hoist Regular Expressions to Module Scope
**Learning:** Instantiating `RegExp` objects inside frequently called utility functions like `isEmptyOrBlank` causes unnecessary garbage collection pressure and object allocation overhead on every invocation.
**Action:** Always hoist non-stateful `RegExp` instances (`WHITE_SPACE_REGEX`) to module scope and evaluate fast-paths like empty string check `value === ""` before regex testing.
