# Bolt's Performance Journal

This is Bolt's log of critical codebase performance learnings.

## 2025-07-24 - [Benchmarking & Database Optimizations]
**Learning:** Optimizing 'create' mutations in Prisma using nested create/write rather than sequential 1+N writes yields ~95.7% latency reduction on agent creation (down from 351ms to 15ms).
**Action:** When creating batch or relational data, prioritize single nested Prisma operations over sequential ones. Revert SQLite DB and provider modifications before committing.
