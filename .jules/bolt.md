## 2025-05-15 - ChatMessage Memoization
**Learning:** In a chat-based application with a growing list of messages, adding a new message to the state causes a re-render of the entire list. Without memoization, every single previous message component is re-rendered, leading to O(n) rendering cost where n is the number of messages.
**Action:** Use `React.memo` for individual message components in lists to ensure only the newly added message is rendered, reducing the cost to O(1) for each update. Always set `displayName` for easier debugging.
