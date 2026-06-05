## 2025-05-15 - [Nested Prisma Creates for Agent and Tasks]
**Learning:** Sequential database writes (1+N) for related entities significantly increase latency and risk inconsistency in non-transactional contexts. Nested creates in Prisma are not only atomic but also reduce network round-trips to one.
**Action:** Always prefer Prisma's nested `create` or `createMany` when persisting a parent entity and its children simultaneously.
