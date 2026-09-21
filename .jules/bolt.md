## 2025-07-24 - Hoist RegExp and Fast-Path Empty Strings in String Helpers
**Learning:** Re-evaluating a RegExp literal inside a helper function executed frequently across form inputs and validation loops instantiates a new `RegExp` object on every invocation and causes unnecessary execution on empty strings.
**Action:** Always hoist non-stateful RegExp objects to module scope and evaluate trivial conditions (like `value === ""`) before executing regex tests.
