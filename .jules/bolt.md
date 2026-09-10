# Bolt's Journal - Critical Learnings

## 2025-07-24 - Hoisting RegExp allocations in utility functions
**Learning:** Instantiating `RegExp` objects inside repeatedly called functions (e.g. task extraction and filtering in loop) creates unnecessary GC pressure and object allocation overhead per iteration.
**Action:** Hoist static `RegExp` literals to module-level constants.
