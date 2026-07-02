# Bolt's Performance Journal

## 2025-07-02 - Prisma Nested Create Optimization
**Learning:** Sequential database writes (1+N) for related entities significantly increase latency due to multiple round-trips. Prisma's nested create handles this in a single operation, improving performance by over 95% in this case.
**Action:** Always prefer Prisma nested creates/connects for related data to minimize database round-trips.
