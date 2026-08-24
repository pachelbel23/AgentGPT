## 2025-07-24 - Hoisting RegExp instantiation in utility functions
**Learning:** Re-creating a RegExp instance inside a frequently called utility function like `isEmptyOrBlank` adds unnecessary allocation overhead (~1.4x slower execution).
**Action:** Always hoist RegExp object allocations to module scope or top-level constants when regex patterns do not depend on function parameters.
