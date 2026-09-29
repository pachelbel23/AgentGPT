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

describe("realTasksFilter should correctly identify non-task strings", () => {
  it("returns true for valid tasks", () => {
    expect(realTasksFilter("Analyze market data")).toBe(true);
    expect(realTasksFilter("Write documentation")).toBe(true);
  });

  it("returns false for completion or empty task indicators", () => {
    expect(realTasksFilter("No tasks added")).toBe(false);
    expect(realTasksFilter("No further tasks required")).toBe(false);
    expect(realTasksFilter("Task completed")).toBe(false);
    expect(realTasksFilter("Task done")).toBe(false);
    expect(realTasksFilter("Do nothing")).toBe(false);
  });
});

describe("extractTasks should filter out completed tasks and non-tasks", () => {
  it("filters out completed tasks and invalid task responses", () => {
    const modelResult = `
    [
      "Task A",
      "Task B",
      "No further tasks needed",
      "Task C"
    ]
    `;
    const completed = ["Task A"];
    const result = extractTasks(modelResult, completed);
    expect(result).toEqual(["Task B", "Task C"]);
  });
});
