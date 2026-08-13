## 2025-07-24 - Database Create Optimization
**Learning:** Sequential database writes (O(N) operations inside a loop or Promise.all) can create a huge bottleneck with remote databases or even SQLite. In this codebase, creating an `Agent` and then sequentially inserting its `AgentTask` records created extra latency. By utilizing Prisma's nested write feature (`tasks: { create: [...] }`), we can complete the inserts inside a single database transaction in a single round-trip.
**Action:** Always prefer nested model writes in Prisma over sequential or loose Promise.all/transaction creations for parent-child relations.

## 2025-07-24 - React Memoization and Key List Optimization
**Learning:** Chat/Message windows that keep rendering list logs are highly prone to O(N) re-renders for every single incremental update/message, causing significant layout thrashing on long lists. Memoizing small recursive or pure component nodes within lists is essential.
**Action:** Use `React.memo` to optimize list item components like `ChatMessage` and `Task` that don't depend on overall list state, and make sure they specify explicit `displayName`s to prevent build-time/runtime React optimization warnings.
