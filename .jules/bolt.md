## 2025-05-14 - [Memoization of List Items]
**Learning:** In a chat/task list where items are only appended, wrapping item components in `React.memo` is a highly effective optimization that reduces re-render complexity from O(N) to O(1) per new item.
**Action:** Always look for list-based UI components that grow over time and ensure their child items are memoized if they receive stable props.

## 2025-05-14 - [useCallback on Native Elements]
**Learning:** Using `useCallback` for event handlers passed to native DOM elements (like `div`) does not provide performance benefits because native elements do not skip re-rendering based on prop equality.
**Action:** Only use `useCallback` when passing functions to memoized custom components.
