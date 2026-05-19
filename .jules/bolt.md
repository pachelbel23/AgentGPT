## 2025-01-27 - Performance Optimizations for Agent Creation and UI Rendering

**Learning:** Database roundtrips during agent creation were O(N) due to individual task inserts. Additionally, list-item components (ChatMessage and Task) lacked memoization, leading to O(N) re-render costs as lists grew.

**Action:** Use Prisma's `createMany` for bulk data operations to achieve O(1) database writes. Apply `React.memo` to frequently updated list-item components, ensuring to set `displayName` for better maintainability and debugging.
