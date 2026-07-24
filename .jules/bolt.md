## 2025-07-24 - Nested Prisma Creates for Agent/Tasks Optimization
**Learning:** Sequential 1+N database inserts during Agent and AgentTask creation are highly inefficient, resulting in ~300-500ms latency on local SQLite. Utilizing Prisma's nested create combines these operations into a single atomic write, lowering database roundtrips.
**Action:** When saving an entity alongside its related or dependent entities, favor Prisma's nested writes or `createMany` over parallel `Promise.all` mappings to avoid N+1 database roundtrips.
