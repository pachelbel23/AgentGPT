# Bolt's Performance Journal

## 2025-07-24 - [Optimizing Agent and Tasks creation with Nested writes]
**Learning:** Sequential parallel database writes (`Promise.all`) on ORMs like Prisma still result in multiple database connections and roundtrips, causing notable performance overhead (O(N) queries) and possible database inconsistency if a middle write fails.
**Action:** Group related parent and child entities into a single nested write (e.g. `create: { parent: { create: { childs: { create: [...] } } } }`). This allows Prisma to optimize the writes into a single transaction, reducing network latency and guaranteeing atomic correctness.
