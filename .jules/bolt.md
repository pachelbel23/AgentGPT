## 2025-07-24 - Hoisting RegExp in utility functions
**Learning:** Returning a regex literal inside a function creates a new `RegExp` object every invocation in JS/TS. Hoisting to module scope eliminates instantiation overhead.
**Action:** Always hoist static regular expressions to top-level module constants in utility functions.
