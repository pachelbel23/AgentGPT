## 2025-07-24 - [Avoid Sequential Database Writes]
**Learning:** Sequential 1+N database writes are extremely slow. In Prisma, doing sequential creates inside `await Promise.all(tasks.map(...))` triggers multiple parallel roundtrips, which degrades performance and breaks database atomicity.
**Action:** Always use nested relational creates where possible to execute a single atomic transaction.
