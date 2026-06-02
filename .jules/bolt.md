## 2026-06-02 - Optimize Database Round-trips with Prisma Nested Create
**Learning:** Using Prisma's nested create for one-to-many relationships is significantly more efficient than individual create calls. It reduces the +N$ round-trip problem to a single request and ensures atomicity without manual transaction handling.
**Action:** Always look for opportunities to use nested writes (create, connect, etc.) when persisting related models in a single operation.
