## 2025-07-24 - Nested Prisma Creates for Agent/Tasks
**Learning:** Sequential 1+N database writes (e.g. creating an Agent and then mapping over AgentTasks to create them one by one) cause a severe performance bottleneck due to multiple database round-trips. Using nested Prisma writes bundles these operations into a single atomic nested create.
**Action:** Always prefer nested Prisma creates (`tasks: { create: [...] }`) instead of multiple separate insert queries when modeling parent-child relationships in Prisma.
