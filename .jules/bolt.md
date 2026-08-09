## 2025-07-24 - Initial Performance Journal
**Learning:** Initializing journal for Bolt. When benchmarking, if 'npx ts-node' fails due to ESM/MJS conflicts with project configuration, a standalone JavaScript script using 'require' and manual mocking of context/input is a reliable alternative for performance measurement.
**Action:** Use plain javascript or custom scripts for benchmarks when ts-node/esm conflicts arise.
