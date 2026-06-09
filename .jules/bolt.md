## 2026-06-09 - [Memoize ChatMessage]
**Learning:** React components in long-running lists (like chat messages or task logs) without memoization cause O(N) re-renders for every new item added, leading to UI lag as the session progresses.
**Action:** Always wrap list-item components in `React.memo` and set `displayName` to ensure efficient rendering and maintainable debugging in AgentGPT's message-heavy interface.
