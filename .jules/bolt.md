## 2025-05-15 - [Database & Rendering Optimizations]
**Learning:** Found N+1 write pattern in agent task creation and unnecessary re-renders in chat/task lists. Also identified a `useEffect` hook running on every render due to a missing dependency array.
**Action:** Always check for `createMany` opportunities when persisting lists of related entities. Use `React.memo` for list-item components in frequently updated views. Ensure all `useEffect` hooks have appropriate dependency arrays to avoid redundant execution.
