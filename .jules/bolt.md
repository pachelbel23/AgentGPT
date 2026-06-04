## 2026-06-04 - [List Component Memoization]
**Learning:** In chat-based applications, list rendering for messages and tasks becomes an O(N) operation on every update if list items aren't memoized.
**Action:** Always wrap repeating list items in `React.memo()` and set `displayName` to ensure O(1) render cost for existing items when the list grows.
