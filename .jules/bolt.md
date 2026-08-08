# Bolt's Performance Journal

## 2025-07-24 - Nested Prisma Creates for Agent Creation
**Learning:** Sequential 1+N writes during batch data creation (e.g., Agent and Tasks) cause high database latency. Using nested Prisma writes reduces database roundtrips and optimizes transaction overhead.
**Action:** Always check for N+1 insert patterns and utilize nested Prisma creates or `createMany` where appropriate.
