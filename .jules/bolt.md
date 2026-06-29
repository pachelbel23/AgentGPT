## 2025-05-15 - [Nested Prisma Creates Optimization]
**Learning:** Sequential 1+N database writes using `prisma.model.create` in a loop are significantly slower than a single nested `create` call because of multiple database round-trips and transaction overhead.
**Action:** Always prefer nested Prisma `create` or `createMany` for bulk inserts related to a parent record.

## 2025-05-15 - [React.memo for List Items]
**Learning:** In the AgentGPT chat and task windows, existing list items maintain reference identity when new items are appended. Using `React.memo` effectively skips re-rendering of all previous messages/tasks during long agent runs.
**Action:** Wrap frequently updated list items in `React.memo` when the list grows over time.
