## 2025-05-15 - Prisma Nested Create Optimization
**Learning:** Using Prisma's nested `create` for related records is significantly more efficient than multiple individual `create` calls. It reduces database round-trips from 1+N to 1 and provides atomicity via a single transaction. This is particularly effective for "parent-child" relationships like Agents and Tasks.
**Action:** Always look for opportunities to batch related record creations using nested `create` in Prisma mutations.
