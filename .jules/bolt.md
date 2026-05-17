## 2024-03-22 - [Memoize ChatMessage]
**Learning:** In applications like AgentGPT where a long list of messages is frequently updated (as the agent thinks and acts), child components in the chat window can become a performance bottleneck. `ReactMarkdown` and complex icons make each `ChatMessage` relatively expensive to re-render.
**Action:** Always use `React.memo` for chat message components and similar list items that don't need to re-render when siblings are added. Ensure `displayName` is set for better debugging and lint compliance.
