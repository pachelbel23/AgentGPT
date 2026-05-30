## 2025-05-15 - [List Rendering Optimization]
**Learning:** Components rendered in a list (like `ChatMessage` and `Task`) without memoization cause O(N) re-renders when the list grows, leading to visible lag in long-running agent sessions. Additionally, `useEffect` hooks without dependency arrays run on every render, which can cause excessive DOM operations (like scrolling).
**Action:** Always memoize list item components and ensure `useEffect` hooks have appropriate dependency arrays when dealing with frequently updated lists.
