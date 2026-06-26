## 2025-05-14 - Optimized Agent and Task Creation
**Learning:** Using Prisma nested creates instead of multiple sequential `create` calls significantly reduces database round-trips and ensures atomicity. In this codebase, the agent creation with $N$ tasks was an $1+N$ operation, which can be optimized to a single transaction with one round-trip.
**Action:** Always look for opportunities to use Prisma's nested write capabilities when creating related records to improve performance and data integrity.
