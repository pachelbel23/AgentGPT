## 2025-09-08 - Hoist RegExp Allocations in Utility Functions

**Learning:** Repeatedly instantiating `RegExp` objects inside helper functions (such as `isEmptyOrBlank`) incurs significant heap allocation and compilation overhead on every invocation (e.g., during input validation on every keystroke).
**Action:** Always hoist `RegExp` objects to module scope (`WHITE_SPACE_REGEX`) and short-circuit simple conditions (like `value === ""`) before evaluating regular expressions.
