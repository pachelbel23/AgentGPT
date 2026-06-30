## 2025-06-30 - Optimized Agent Creation with Nested Prisma Writes
**Learning:** Collapsing 1+N database writes into a single nested create mutation significantly reduces database round-trips and ensures atomicity. In this environment, benchmarking with 50 tasks showed a reduction in write latency from ~268ms to ~26ms (approx. 90% improvement).
**Action:** Always prefer nested Prisma creates over sequential or `Promise.all` based creates for related entities to minimize latency and ensure transactional integrity.
