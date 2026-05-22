## 2025-05-22 - [Memoization of list items]
**Learning:** List items that are frequently appended to (like chat messages or task lists) cause O(N) re-renders where N is the total number of items, unless memoized. This is a common performance bottleneck in agentic applications where lists grow over time.
**Action:** Always use `React.memo` for list item components in the `ChatWindow` and `TaskWindow` and ensure they have stable prop references.
