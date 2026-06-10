# Bolt's Journal

## 2025-05-15 - Nested Prisma Writes for Atomic Agent Creation
**Learning:** Using Prisma's nested `create` instead of separate `prisma.model.create` calls significantly reduces database round-trips from 1+N to 1. In this environment (SQLite benchmark), it reduced agent creation latency for 20 tasks by ~40% (from ~170ms to ~100ms). It also ensures atomicity via an implicit transaction.
**Action:** Always prefer nested writes or `createMany` (if supported and appropriate) over sequential single-row creations to minimize latency and ensure data integrity.
