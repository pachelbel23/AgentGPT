## 2026-05-30 - [Performance optimization of list rendering]
**Learning:** List items like chat messages and tasks often re-render unnecessarily when new items are added or during unrelated parent updates. Memoization with React.memo is essential for these high-frequency rendering paths. Additionally, effects without dependency arrays in frequently rendering components are a common source of performance degradation.
**Action:** Always check for missing dependency arrays in useEffect hooks and ensure list items are memoized to avoid O(N) re-render costs.
