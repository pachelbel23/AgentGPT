## 2026-06-05 - [Memoization of Core Components]
 **Learning:** In a high-frequency update application like AgentGPT, missing memoization on the main component tree causes the entire UI (including long message and task lists) to re-render on every keystroke in the input fields.
 **Action:** Always wrap message list and task list components in React.memo and stabilize their props with useCallback/useMemo in the parent to maintain UI responsiveness.
