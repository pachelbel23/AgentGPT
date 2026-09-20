## 2025-07-24 - Single Nested Write vs 1+N Inserts in Prisma
**Learning:** Using Prisma's nested `create` syntax (`tasks: { create: [...] }`) executes agent and task creation in a single atomic database operation rather than issuing sequential/unbatched inserts (`1 + N` roundtrips).
**Action:** Always favor nested writes or batch operations in tRPC handlers to eliminate `1 + N` write bottlenecks when persisting parent-child models.
