# Bolt's Performance Journal

## 2025-07-24 - Nested Prisma Creates
**Learning:** Optimizing the agent creation flow using nested Prisma writes (`tasks: { create: ... }`) instead of multiple sequential writes reduces latency for 50 tasks from 266ms to 16ms (a 93.98% improvement) on local SQLite.
**Action:** Always favor nested Prisma writes or `createMany` transactions over sequential/individual model creates when handling parent-child or N-relation creations.
