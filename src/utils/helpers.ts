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

export const extractTasks = (
  text: string,
  completedTasks: string[]
): string[] => {
  // Use a Set for lookups on larger arrays to avoid O(N) includes calls per task,
  // while avoiding Set allocation overhead for small arrays (< 30 items)
  const completedSet =
    completedTasks && completedTasks.length >= 30
      ? new Set(completedTasks)
      : null;

  return extractArray(text)
    .filter(realTasksFilter)
    .filter((task) =>
      completedSet
        ? !completedSet.has(task)
        : !(completedTasks || []).includes(task)
    );
};

// Hoist static Regular Expression to module scope to avoid re-allocating RegExp objects per call
const ARRAY_EXTRACT_REGEX = /(\[(?:\s*"(?:[^"\\]|\\.)*"\s*,?)+\s*\])/;

export const extractArray = (inputStr: string): string[] => {
  // Match an outer array of strings (including nested arrays)
  const match = inputStr.match(ARRAY_EXTRACT_REGEX);

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

// Hoist static Regular Expressions to module scope to avoid re-allocating RegExp objects per task filter
const NO_TASK_REGEX =
  /^No( (new|further|additional|extra|other))? tasks? (is )?(required|needed|added|created|inputted).*$/i;
const TASK_COMPLETE_REGEX =
  /^Task (complete|completed|finished|done|over|success).*/i;
const DO_NOTHING_REGEX = /^(\s*|Do nothing(\s.*)?)$/i;

// Model will return tasks such as "No tasks added". We should filter these
export const realTasksFilter = (input: string): boolean => {
  return (
    !NO_TASK_REGEX.test(input) &&
    !TASK_COMPLETE_REGEX.test(input) &&
    !DO_NOTHING_REGEX.test(input)
  );
};
