## 2026-05-27 - [Memoize message components and optimize scroll effect]
**Learning:** List-item components like ChatMessage and Task in a chat-based application can lead to O(N) re-render costs as the message list grows. Memoization is critical here. Additionally, useEffect without a dependency array can cause redundant DOM operations (like scrolling) on every render.
**Action:** Always memoize repeating list components and ensure effects have proper dependency arrays to avoid unnecessary work.
