# Bolt's Journal - Critical Learnings

## 2025-07-24 - Nested Prisma Creates for Batch Writes
**Learning:** Replacing 1 + N sequential/parallel Prisma create calls with a single nested `create` call reduces database write roundtrips from 1+N to 1 and guarantees transactional atomicity.
**Action:** When writing Prisma creation logic for parent-child relations, prefer nested `create` data structures over `Promise.all` with multiple `create` queries.
