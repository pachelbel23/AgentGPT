## 2024-06-18 - [Prisma Nested Create for Agent Persistence]
**Learning:** Replacing sequential database writes (1+N) with a single nested Prisma create significantly reduces latency. In a benchmark with 20 tasks, agent creation time dropped from ~210ms to ~8ms (a 96% improvement) on a local SQLite setup.
**Action:** Always prefer Prisma nested creates/updates for parent-child relationships to minimize database round-trips.

## 2024-06-18 - [React.memo for Chat/Task Lists]
**Learning:** In applications with frequently updated lists (like an AI agent's chat or task log), wrapping individual list item components in React.memo prevents redundant re-renders of the entire list whenever a new item is appended.
**Action:** Use React.memo for list item components that maintain reference identity to optimize rendering performance in high-frequency update scenarios.
