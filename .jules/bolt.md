## 2025-07-24 - Hoisting RegExp in String Utility Functions
**Learning:** Re-creating a RegExp instance on every function invocation adds substantial runtime allocation overhead in JS/V8. Hoisting regexes without state flags (`/g` or `/y`) to module scope and fast-pathing empty strings yields ~58% speed improvement.
**Action:** Always check string utility functions for inline RegExp construction and hoist non-global regexes to module scope.
