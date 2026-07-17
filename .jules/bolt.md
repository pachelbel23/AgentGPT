# Bolt's Journal ⚡

This journal contains critical learnings on performance optimizations for AgentGPT.

## 2025-07-24 - Memoize Repeated List Components (ChatMessage & Task)
**Learning:** In highly dynamic React applications (such as AI chat or task agents), lists grow incrementally. Re-rendering the parent container triggers a full re-render of all historical list items. Components like `ChatMessage` render complex sub-trees (like `ReactMarkdown` with heavy GFM and Highlight.js parsing), which incurs significant, compound rendering overhead. Wrapping these pure, leaf-level components in `React.memo` keeps rendering O(1) relative to new list entries.
**Action:** Always identify long, incrementally updated lists and ensure their individual item components are memoized with `React.memo` and assigned clear `displayName` values.
