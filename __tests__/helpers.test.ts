import {
  extractArray,
  extractTasks,
  realTasksFilter,
} from "../src/utils/helpers";

describe("realTasksFilter", () => {
  it("should return false for 'No tasks' responses", () => {
    expect(realTasksFilter("No tasks required")).toBe(false);
    expect(realTasksFilter("No new task needed")).toBe(false);
    expect(realTasksFilter("No additional tasks is added")).toBe(false);
  });

  it("should return false for completed task outputs", () => {
    expect(realTasksFilter("Task complete")).toBe(false);
    expect(realTasksFilter("Task completed successfully")).toBe(false);
    expect(realTasksFilter("Task finished")).toBe(false);
    expect(realTasksFilter("Task done")).toBe(false);
  });

  it("should return false for do nothing outputs", () => {
    expect(realTasksFilter("Do nothing")).toBe(false);
    expect(realTasksFilter("   ")).toBe(false);
  });

  it("should return true for valid task descriptions", () => {
    expect(realTasksFilter("Write unit tests for helpers")).toBe(true);
    expect(realTasksFilter("Analyze performance metrics")).toBe(true);
  });
});

describe("extractTasks", () => {
  it("should extract valid tasks and filter out completed tasks", () => {
    const rawText = '["Task 1", "Task 2", "Task 3", "No tasks needed"]';
    const completedTasks = ["Task 1"];

    const result = extractTasks(rawText, completedTasks);

    expect(result).toEqual(["Task 2", "Task 3"]);
  });

  it("should handle null or undefined completedTasks gracefully", () => {
    const rawText = '["Task 1", "Task 2"]';
    // @ts-expect-error testing edge case with null
    const result = extractTasks(rawText, null);

    expect(result).toEqual(["Task 1", "Task 2"]);
  });
});
