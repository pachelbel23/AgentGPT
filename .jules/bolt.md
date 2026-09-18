## 2026-09-18 - Hoisting RegExp and Short-Circuiting in String Utilities

**Learning:** Declaring RegExp literals inside helper functions causes V8 to compile/instantiate new RegExp objects on every function call. Furthermore, placing full regex evaluation before basic string equality checks (`value === ''`) incurs unnecessary regex testing overhead for common empty string inputs.

**Action:** Always hoist static RegExp definitions to module scope outside functions, and reorder logical conditions to perform fast equality/length checks (`value === ''`) before regex execution to short-circuit early.
