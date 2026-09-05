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

// Hoist RegExp allocations to module scope to prevent re-allocating RegExp instances
// during every invocation of `extractArray` and `realTasksFilter` in task processing loops.
const EXTRACT_ARRAY_REGEX = /(\[(?:\s*"(?:[^"\\]|\\.)*"\s*,?)+\s*\])/;
const NO_TASK_REGEX =
  /^No( (new|further|additional|extra|other))? tasks? (is )?(required|needed|added|created|inputted).*$/i;
const TASK_COMPLETE_REGEX =
  /^Task (complete|completed|finished|done|over|success).*/i;
const DO_NOTHING_REGEX = /^(\s*|Do nothing(\s.*)?)$/i;

// Threshold to switch from Array.prototype.includes (O(N)) to Set.has (O(1)) lookup.
// For small arrays (< 30 items), Array.prototype.includes is faster in V8 due to zero heap allocation overhead.
const SET_LOOKUP_THRESHOLD = 30;

export const extractTasks = (
  text: string,
  completedTasks: string[] = []
): string[] => {
  const completed = completedTasks || [];
  const useSet = completed.length >= SET_LOOKUP_THRESHOLD;
  const completedSet = useSet ? new Set(completed) : null;

  return extractArray(text)
    .filter(realTasksFilter)
    .filter((task) => (completedSet ? !completedSet.has(task) : !completed.includes(task)));
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
