## 2025-05-14 - List-item Memoization Pattern
**Learning:** Components like `ChatMessage` and `Task` that are rendered in lists which grow over time can cause O(N) re-render costs if not memoized. Each new item triggers a re-render of all previous items.
**Action:** Always use `React.memo` for list-item components and explicitly set `displayName`. Add comments explaining the optimization and expected impact.
