## 2025-07-25 - Hoisting RegExp Allocations in String Filtering Helpers

**Learning:** Declaring regular expression literals inside repeatedly called functions (like string filters or whitespace checkers) instantiates new `RegExp` objects on every call, creating heavy GC pressure and CPU overhead (~40-50% slower).
**Action:** Always hoist `RegExp` objects to module level when the regex pattern is constant across function calls.
