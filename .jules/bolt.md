## 2025-05-15 - [Database] 1+N query bottleneck in Agent creation
**Learning:** The agent creation process used individual Prisma create calls for each task in a loop (1+N). While wrapped in Promise.all, this still creates multiple database roundtrips and lacks transactional atomicity compared to nested writes.
**Action:** Always prefer Prisma's nested create/update operations for parent-child relationships to ensure atomicity and reduce database latency to a single roundtrip.
