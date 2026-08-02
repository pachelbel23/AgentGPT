## 2025-07-24 - [Database N+1 optimization via Prisma Nested Creates]
**Learning:** Performing multiple independent insertions sequentially (1+N writes) results in a high database latency bottleneck because of sequential network round-trips and connection pool contention. Leveraging nested Prisma writes performs the entire structured write in a single batch, drastically improving performance.
**Action:** Always prefer Prisma nested creates over mapping arrays to separate `prisma.model.create` requests combined with `Promise.all`.
