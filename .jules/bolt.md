## 2025-07-24 - Mocking Auth Session for tRPC Router Jest Testing
**Learning:** Importing tRPC routers that extend `protectedProcedure` will transitively import `src/server/auth.ts` -> `next-auth` -> `jose` (ESM module), causing Jest CommonJS syntax error.
**Action:** Always mock `src/server/auth` with `jest.mock("../src/server/auth", () => ({ getServerAuthSession: jest.fn() }))` in tRPC unit tests.
