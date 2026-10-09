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

describe("realTasksFilter should filter out non-task system outputs", () => {
  it("should return false for system messages indicating no tasks or task completion", () => {
    expect(realTasksFilter("No new tasks required")).toBe(false);
    expect(realTasksFilter("No tasks added")).toBe(false);
    expect(realTasksFilter("Task complete")).toBe(false);
    expect(realTasksFilter("Task finished")).toBe(false);
    expect(realTasksFilter("Do nothing")).toBe(false);
  });

  it("should return true for valid actionable tasks", () => {
    expect(realTasksFilter("Research competitor features")).toBe(true);
    expect(realTasksFilter("Write unit tests for authentication")).toBe(true);
  });
});

describe("extractTasks should filter completed and non-task items from model response", () => {
  it("should return only new and valid tasks", () => {
    const text = `
    [
      "Task 1",
      "Task 2",
      "No tasks needed"
    ]
    `;
    const completedTasks = ["Task 1"];
    expect(extractTasks(text, completedTasks)).toEqual(["Task 2"]);
  });
});
