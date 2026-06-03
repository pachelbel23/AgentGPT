# Bolt's Journal

## 2025-01-24 - Optimizing Agent Creation
**Learning:** Found that Agent creation logic uses multiple database round-trips for tasks (1+N), which is a significant bottleneck as the number of tasks increases. In a benchmark with 20 tasks, the current method took ~194ms while the nested create took only ~8ms (a 95% reduction in latency).
**Action:** Refactored `agentRouter.ts` to use Prisma's nested `create` to reduce database calls and improve performance.
