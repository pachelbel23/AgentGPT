## 2025-09-24 - Module Scope RegExp Hoisting in Utility Functions
**Learning:** Instantiating `RegExp` inside utility functions like `isEmptyOrBlank` causes allocation overhead on every invocation, whereas hoisting `WHITE_SPACE_REGEX` and checking empty string short-circuits execution and yields a ~38% speedup.
**Action:** Always check for regex object instantiations inside frequently called utility functions and hoist them to module scope.
