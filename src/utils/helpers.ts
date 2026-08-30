type Constructor<T> = new (...args: unknown[]) => T;

/* Check whether array is of the specified type */
export const isArrayOfType = <T>(
  arr: unknown[] | unknown,
  type: Constructor<T> | string
): arr is T[] => {
  return (
    Array.isArray(arr) &&
    arr.every((item): item is T => {
      if (typeof type === "string") {
        return typeof item === type;
      } else {
        return item instanceof type;
      }
    })
  );
};

// Hoisted Regular Expressions to avoid re-allocation on repeated function invocations.
const ARRAY_REGEX = /(\[(?:\s*"(?:[^"\\]|\\.)*"\s*,?)+\s*\])/;
const NO_TASK_REGEX =
  /^No( (new|further|additional|extra|other))? tasks? (is )?(required|needed|added|created|inputted).*$/i;
const TASK_COMPLETE_REGEX =
  /^Task (complete|completed|finished|done|over|success).*/i;
const DO_NOTHING_REGEX = /^(\s*|Do nothing(\s.*)?)$/i;

/**
 * Optimized extractTasks function.
 * Uses a Set for fast membership lookup when completedTasks list is large, avoiding O(N*M) array scans.
 */
export const extractTasks = (
  text: string,
  completedTasks: string[]
): string[] => {
  const tasks = extractArray(text).filter(realTasksFilter);
  if (!completedTasks || completedTasks.length === 0) {
    return tasks;
  }

  // For small arrays, Array.prototype.includes is faster due to zero Set allocation overhead.
  // For larger arrays (>20 items), Set.prototype.has provides O(1) lookups.
  if (completedTasks.length > 20) {
    const completedSet = new Set(completedTasks);
    return tasks.filter((task) => !completedSet.has(task));
  }

  return tasks.filter((task) => !completedTasks.includes(task));
};

export const extractArray = (inputStr: string): string[] => {
  // Match an outer array of strings (including nested arrays) using pre-allocated RegExp
  const match = inputStr.match(ARRAY_REGEX);

  if (match && match[0]) {
    try {
      // Parse the matched string to get the array
      return JSON.parse(match[0]) as string[];
    } catch (error) {
      console.error("Error parsing the matched array:", error);
    }
  }

  console.warn("Error, could not extract array from inputString:", inputStr);
  return [];
};

// Model will return tasks such as "No tasks added". We should filter these
export const realTasksFilter = (input: string): boolean => {
  return (
    !NO_TASK_REGEX.test(input) &&
    !TASK_COMPLETE_REGEX.test(input) &&
    !DO_NOTHING_REGEX.test(input)
  );
};
