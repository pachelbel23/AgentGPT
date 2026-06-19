## 2025-06-19 - Prisma Nested Create Optimization
**Learning:** Using Prisma's nested `create` instead of manual `Promise.all` with multiple `create` calls significantly reduces database latency (from ~97ms to ~10ms in SQLite for 20 tasks). This is because it reduces the number of round-trips to the database from 1+N to 1 and ensures atomicity.
**Action:** Always prefer nested creates/updates in Prisma when dealing with related data to minimize round-trips.
