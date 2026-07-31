## 2025-07-24 - Nested Prisma Creates for Batched Data
**Learning:** In T3 stack projects utilizing Prisma, performing sequential `prisma.create` operations in a `Promise.all` mapping results in 1+N query roundtrips to the database, causing significant latency bottlenecks. Leveraging Prisma's native nested write capabilities (such as `tasks: { create: [...] }`) allows batching the creation in a single transaction/operation, improving latency by ~95%.
**Action:** Always favor nested writes for parent-child relationship creation in Prisma instead of multiple sequential writes.

## 2025-07-24 - Benchmarking & Schema Restoration Safeguards
**Learning:** Modifying the Prisma provider to 'sqlite' or removing '@db.Text' for local benchmarking and testing are breaking architectural changes. Staging such changes or leaving backup files like `.prismae` disrupts production database integration and git cleanliness.
**Action:** Strictly revert schema changes to production config (e.g. 'mysql'), re-run client generation, and thoroughly clean up temporary SQLite artifacts (`dev.db`, `.prismae`) before committing or submitting a PR.
