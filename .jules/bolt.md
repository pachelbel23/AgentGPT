## 2024-05-23 - Database optimization: Nested create for 1+N avoidance
**Learning:** Sequential database writes in loops (e.g., using `Promise.all` on individual `prisma.model.create` calls) create a 1+N bottleneck and lack atomicity.
**Action:** Use Prisma's nested `create` or `createMany` to batch related record persistence into a single transaction/query whenever possible.
