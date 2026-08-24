import { extractTasks, realTasksFilter, extractArray } from "../src/utils/helpers";

describe("realTasksFilter", () => {
  it("should filter out 'No tasks added' style messages", () => {
    expect(realTasksFilter("No tasks added")).toBe(false);
    expect(realTasksFilter("No new tasks required")).toBe(false);
    expect(realTasksFilter("No further tasks needed")).toBe(false);
  });

  it("should filter out task completion messages", () => {
    expect(realTasksFilter("Task complete")).toBe(false);
    expect(realTasksFilter("Task completed successfully")).toBe(false);
    expect(realTasksFilter("Task finished")).toBe(false);
  });

  it("should filter out 'Do nothing' messages", () => {
    expect(realTasksFilter("Do nothing")).toBe(false);
    expect(realTasksFilter("Do nothing else")).toBe(false);
    expect(realTasksFilter("   ")).toBe(false);
  });

  it("should keep actual valid tasks", () => {
    expect(realTasksFilter("Analyze market research")).toBe(true);
    expect(realTasksFilter("Write unit tests")).toBe(true);
  });
});

describe("extractTasks", () => {
  it("should extract tasks and filter completed tasks", () => {
    const input = '["Task 1", "Task 2", "Task 3", "No tasks added"]';
    const completed = ["Task 1"];
    expect(extractTasks(input, completed)).toEqual(["Task 2", "Task 3"]);
  });

  it("should handle null or empty completedTasks", () => {
    const input = '["Task 1", "Task 2"]';
    // @ts-expect-error testing edge case with undefined/null
    expect(extractTasks(input, null)).toEqual(["Task 1", "Task 2"]);
  });
});
