## 2025-01-24 - [Prisma Nested Create Optimization]
**Learning:** Found a 1+N database write bottleneck in agent creation. Using Prisma's nested `create` reduced latency by >90% (from ~464ms to ~18ms in benchmarks) and improved atomicity.
**Action:** Audit other Prisma mutations for 1+N patterns and replace with nested operations where possible.

## 2025-01-24 - [SQLite Setup Side Effects]
**Learning:** The `prisma/useSqlite.sh` script uses `sed -ie`, which creates `.prismae` backup files that can persist and potentially interfere with future operations or git state.
**Action:** Always manually clean up `.prismae` files after running `useSqlite.sh`.
