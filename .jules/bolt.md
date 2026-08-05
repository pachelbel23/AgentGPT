# Bolt's Performance Journal

## 2025-07-24 - [Avoid 1+N DB Writes via Prisma Nested Writes]
**Learning:** Sequential/concurrent 1+N database writes (e.g., executing separate `prisma.create` statements for parent and children in a `Promise.all` map) cause excessive network round-trips and connection pool contention. Using Prisma's native nested write capabilities (e.g., nesting child creations inside parent creation via relations) combines these into an atomic transaction/query and drastically reduces latency.
**Action:** Always prefer Prisma's nested relational creation (`relationName: { create: [...] }`) over multiple consecutive `create` calls for batch operations.

## 2025-07-24 - [Optimize O(N) Chat Component Re-renders]
**Learning:** Appending a new message or task in list components causes complete virtual DOM reconciliation and rendering of all existing items on every updates, leading to O(N) re-renders. Wrapping list item components in `React.memo` and adding explicit dependency arrays to layout-affecting `useEffect` hooks avoids this, keeping updates localized and efficient.
**Action:** Always wrap frequently updated list-item components (such as chat messages or tasks) in `React.memo` with explicit `displayName`s, and ensure `useEffect` scroll/layout helpers specify concrete dependency arrays.
