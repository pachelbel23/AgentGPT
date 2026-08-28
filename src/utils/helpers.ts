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

// Hoisted regular expressions to avoid allocating new RegExp instances on every call.
const EXTRACT_ARRAY_REGEX = /(\[(?:\s*"(?:[^"\\]|\\.)*"\s*,?)+\s*\])/;

const NO_TASK_REGEX =
  /^No( (new|further|additional|extra|other))? tasks? (is )?(required|needed|added|created|inputted).*$/i;
const TASK_COMPLETE_REGEX =
  /^Task (complete|completed|finished|done|over|success).*/i;
const DO_NOTHING_REGEX = /^(\s*|Do nothing(\s.*)?)$/i;

export const extractTasks = (
  text: string,
  completedTasks: string[]
): string[] => {
  const completed = completedTasks || [];
  // For larger sets of completed tasks, using a Set provides O(1) lookup.
  const completedSet = completed.length > 30 ? new Set(completed) : null;
  const isCompleted = (task: string) =>
    completedSet ? completedSet.has(task) : completed.includes(task);

  return extractArray(text).filter(
    (task) => realTasksFilter(task) && !isCompleted(task)
  );
};

export const extractArray = (inputStr: string): string[] => {
  // Match an outer array of strings (including nested arrays)
  const match = inputStr.match(EXTRACT_ARRAY_REGEX);

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
