## 2025-07-24 - [Optimize Agent Creation using nested Prisma writes]
**Learning:** Using sequential `prisma.create` queries in a map with `Promise.all` causes N+1 query execution bottlenecks and poses consistency risks (orphaned rows on failure). Nested Prisma writes allow creating parent and relation records in a single transactional query, reducing latency by up to 95%.
**Action:** Always favor Prisma's nested create/connect constructs over manually orchestrated sequential queries for linked datasets.
