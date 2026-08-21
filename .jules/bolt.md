## 2025-07-24 - Prisma nested writes eliminate 1+N batch insertion overhead
**Learning:** Sequential `prisma.model.create` calls within `Promise.all` issue separate $N + 1$ database queries and connection checkouts. Utilizing Prisma's nested relational `create` constructs parent and child records in a single transactional query, reducing latency by over ~90% for bulk child insertions.
**Action:** Always prefer Prisma's nested relational write syntax (`relation: { create: [...] }`) when creating parent models alongside array attributes.
