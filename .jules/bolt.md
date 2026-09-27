## 2025-07-24 - Hoisting RegExp allocations in utility helpers
**Learning:** Re-instantiating non-global RegExp objects inside frequently executed utility functions adds measurable function call overhead and GC pressure. Hoisting RegExp literals to module scope and evaluating simple equality checks (`value === ""`) before regex evaluation yields a ~20-30% execution time reduction.
**Action:** Always hoist stateless RegExp instances (without `/g` or `/y` flags) to module scope and short-circuit empty inputs prior to regex execution.
