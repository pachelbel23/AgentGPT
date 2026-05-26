# Bolt's Journal - Performance Optimizations

## 2025-05-14 - Batching Database Calls in Agent Creation
**Learning:** The agent creation flow was using a 1+N database call pattern (one call to create the `Agent` and then multiple calls in parallel for each `AgentTask`). This leads to excessive database roundtrips. Prisma's nested `create` allows batching these into a single transaction, which is significantly more efficient.

**Action:** Always look for 1+N patterns in write operations and use Prisma's nested `create` or `createMany` to batch operations.
