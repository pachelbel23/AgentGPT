## 2024-05-21 - Batch database writes with createMany
**Learning:** Using `Promise.all` with individual `prisma.create` calls results in N database roundtrips, which is inefficient for bulk operations. Prisma's `createMany` is the preferred method for bulk data insertions in MySQL.
**Action:** Always look for patterns where multiple records are created for a single parent and use `createMany` to optimize for O(1) database roundtrips.
