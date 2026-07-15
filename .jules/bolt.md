## 2025-07-15 - Optimizing Agent Creation with Nested Prisma Writes
**Learning:** Sequential 1+N writes in Prisma (creating a parent then looping to create children) introduces significant latency due to multiple database round-trips and lack of native batching in that pattern. In this codebase, creating an Agent with 50 tasks took ~350-400ms sequentially but only ~15ms using a nested create.
**Action:** Always prefer Prisma's nested `create` or `createMany` (where supported) for parent-child relationships to ensure atomicity and minimize database latency.
