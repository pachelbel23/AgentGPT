## 2025-01-30 - Prisma Nested Create Optimization
**Learning:** Sequential database writes for related entities (1+N pattern) cause significant latency due to multiple round-trips. Prisma's nested `create` is much more efficient.
**Action:** Always look for sequential Prisma `create` calls that can be combined into a single nested operation.

## 2025-01-30 - Optional Chaining in tRPC Protected Procedures
**Learning:** Using optional chaining (`?.`) on `ctx.session.user` in a `protectedProcedure` is redundant and adds visual noise, as the middleware already guarantees the user exists.
**Action:** Remove unnecessary optional chaining in `protectedProcedure` to improve code clarity and leverage TypeScript type narrowing.
