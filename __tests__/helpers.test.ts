import { extractTasks, realTasksFilter, extractArray } from "../src/utils/helpers";

describe("realTasksFilter", () => {
  it("should allow valid task descriptions", () => {
    expect(realTasksFilter("Analyze market data")).toBe(true);
    expect(realTasksFilter("Write documentation for API")).toBe(true);
  });

  it("should filter out non-task indicators", () => {
    expect(realTasksFilter("No new tasks added")).toBe(false);
    expect(realTasksFilter("No further tasks required")).toBe(false);
    expect(realTasksFilter("Task complete")).toBe(false);
    expect(realTasksFilter("Task finished")).toBe(false);
    expect(realTasksFilter("Do nothing")).toBe(false);
  });
});

describe("extractTasks", () => {
  it("should extract tasks and filter out completed tasks with small list (<30 items)", () => {
    const modelOutput = `["Task A", "Task B", "No new tasks added", "Task C"]`;
    const completed = ["Task A"];

    const result = extractTasks(modelOutput, completed);
    expect(result).toEqual(["Task B", "Task C"]);
  });

  it("should extract tasks and filter out completed tasks with large list (>=30 items)", () => {
    const completed = Array.from({ length: 35 }, (_, i) => `Task ${i}`);
    const newTasks = ["Task 0", "Task 34", "Task 35", "Task 36"];
    const modelOutput = JSON.stringify(newTasks);

    const result = extractTasks(modelOutput, completed);
    expect(result).toEqual(["Task 35", "Task 36"]);
  });

  it("should handle undefined completedTasks gracefully", () => {
    const modelOutput = `["Task 1", "Task 2"]`;
    const result = extractTasks(modelOutput, undefined as unknown as string[]);
    expect(result).toEqual(["Task 1", "Task 2"]);
  });
});

describe("extractArray", () => {
  it("should return empty array for invalid inputs", () => {
    expect(extractArray("invalid string without array")).toEqual([]);
  });
});
