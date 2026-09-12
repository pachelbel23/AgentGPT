import { extractArray, extractTasks, realTasksFilter } from "../src/utils/helpers";

describe("Strings should be extracted from arrays correctly", () => {
  it("simple", () => {
    const modelResult = `
  \`\`\`json
[
  "Research and implement natural language processing techniques to improve task creation accuracy.",
  "Develop a machine learning model to predict the most relevant tasks for users based on their past activity.",
  "Integrate with external tools and services to provide users with additional features such as task prioritization and scheduling."
]
\`\`\`
`;
    expect(extractArray(modelResult).length).toBe(3);
    expect(extractArray(modelResult).at(2)).toBe(
      "Integrate with external tools and services to provide users with additional features such as task prioritization and scheduling."
    );
  });
});

describe("realTasksFilter should correctly identify non-tasks", () => {
  it("returns true for valid tasks", () => {
    expect(realTasksFilter("Research target audience")).toBe(true);
    expect(realTasksFilter("Create marketing strategy")).toBe(true);
  });

  it("returns false for non-task responses", () => {
    expect(realTasksFilter("No tasks required")).toBe(false);
    expect(realTasksFilter("No new tasks added")).toBe(false);
    expect(realTasksFilter("Task completed")).toBe(false);
    expect(realTasksFilter("Task done")).toBe(false);
    expect(realTasksFilter("Do nothing")).toBe(false);
    expect(realTasksFilter("  ")).toBe(false);
  });
});

describe("extractTasks should filter non-tasks and completed tasks", () => {
  it("filters out completed tasks and invalid task messages", () => {
    const modelResult = `
    [
      "Task A",
      "Task B",
      "No further tasks required"
    ]
    `;
    const tasks = extractTasks(modelResult, ["Task A"]);
    expect(tasks).toEqual(["Task B"]);
  });
});
