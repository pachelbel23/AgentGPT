## 2025-07-24 - [Avoid breaking architectural changes during local benchmarking]
**Learning:** Modifying the Prisma provider to 'sqlite' or removing '@db.Text' for benchmarking are considered breaking architectural changes; these must be strictly reverted and 'prisma/schema.prisma' restored to its production configuration before staging a PR.
**Action:** Always ensure any local database configuration/provider changes are reverted and untracked before submitting.

## 2025-07-24 - [Nested Prisma Writes for Performance Optimization]
**Learning:** Optimizing 'create' mutation using nested Prisma writes instead of sequential 1+N writes significantly reduces latency. For 50 tasks, this reduced latency from 351ms to 15ms (~95.7% improvement) on local SQLite.
**Action:** When creating relations in Prisma, use nested writes (`create` inside parents) instead of 1+N sequential writes.

## 2025-07-24 - [O(N) Re-renders in React List Components]
**Learning:** To prevent O(N) re-renders in chat-based list components (such as 'ChatWindow.tsx' and 'TaskWindow.tsx'), wrap list-item components like 'ChatMessage' and 'Task' in 'React.memo' with explicitly defined displayNames, and specify complete dependency arrays for UI effects (such as layout scrolling) to avoid redundant renders and DOM updates.
**Action:** Memoize component item renderers and keep dependencies precise.
