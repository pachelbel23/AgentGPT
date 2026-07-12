## 2025-01-30 - Prisma Nested Create Optimization
**Learning:** Replacing sequential 1+N database writes with a single nested Prisma create significantly reduces latency and ensures atomicity.
**Action:** Always prefer nested creates/connects in Prisma when handling parent-child relationships to minimize database round-trips.
