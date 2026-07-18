# Bolt's Journal

## 2025-07-24 - Nested Prisma Creates Optimization
**Learning:** Sequential/parallelized `prisma.create` statements for parent and nested child elements incur 1+N database round-trips. Using nested Prisma create statements (`create` with `tasks: { create: [...] }`) optimizes database interaction to a single nested write or a single atomic transaction.
**Action:** Always prefer nested Prisma creates over multiple sequential/parallel writes when saving a parent and child list in Prisma.
