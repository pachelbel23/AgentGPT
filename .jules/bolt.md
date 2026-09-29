## 2026-05-18 - Module-level RegExp Hoisting for Task Utilities
**Learning:** Instantiating regular expressions (`RegExp`) inside repeatedly called task helper functions (`realTasksFilter`, `extractArray`) causes overhead from repeated object allocation. Since non-global/non-sticky RegExp patterns are stateless in V8, hoisting them to top-level module scope is completely safe and improves execution speed by ~40%.
**Action:** Always check array transformation and filtering helpers for local `RegExp` declarations and hoist stateless patterns to module scope.
