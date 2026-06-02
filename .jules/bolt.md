## 2026-06-02 - [Optimized Agent Persistence]
**Learning:** Using Prisma's nested create is significantly more efficient than multiple individual creates wrapped in Promise.all, as it reduces database round-trips from 1+N to 1 and ensures atomicity without manual transaction handling.
**Action:** Always look for N+1 write patterns in Prisma mutations and refactor to nested writes where possible.
