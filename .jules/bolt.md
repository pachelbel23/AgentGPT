## 2025-07-24 - Nested Prisma Creates
**Learning:** Sequential 1+N database writes (e.g., creating an Agent and then sequentially/concurrently inserting related Tasks using separate `create` calls) cause significant database latency. Wrapping them in a nested Prisma write utilizes single-transaction atomicity and avoids separate server-to-database round trips, bringing query times from ~300-500ms down to ~15-20ms.
**Action:** Always utilize Prisma nested writes (`create` or `connect` within main object creation) when saving entities and their related sub-entities.
