## 2025-05-15 - [Memoizing chat items]
**Learning:** React components rendered in rapidly growing lists (like chat messages or task lists) cause O(N) re-render complexity. Wrapping these in `React.memo` reduces this to O(1) for new items.
**Action:** Always check for list item components and apply `React.memo` where appropriate, especially in chat-like interfaces.
