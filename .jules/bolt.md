# Bolt's Performance Journal

This is Bolt's performance journal to track critical learnings, codebase-specific performance patterns/anti-patterns, and insights.

## 2025-08-13 - [Initial Performance Analysis & Journal Setup]
**Learning:** Found that typescript-eslint in this project restricts non-string template expressions, so we must avoid using logical AND short-circuiting patterns like `isTypeTextArea() && 'md:h-20'` and instead use conditional ternary. Additionally, identified potential N+1 or bulk write latency when creating agent and tasks which is optimized using nested writes (covered in memories), and verified React.memo usage to reduce re-renders.
**Action:** Always write clean TypeScript/TSX code adhering to the typescript-eslint rules, avoiding short-circuit logical expressions inside template strings.
