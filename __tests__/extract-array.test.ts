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

  it("filters out invalid/completed tasks", () => {
    const modelResult = `["Task 1", "No tasks needed", "Task 2"]`;
    const completedTasks = ["Task 1"];
    const result = extractTasks(modelResult, completedTasks);
    expect(result).toEqual(["Task 2"]);
  });

  it("realTasksFilter correctly filters system message responses", () => {
    expect(realTasksFilter("No new tasks added")).toBe(false);
    expect(realTasksFilter("Task complete")).toBe(false);
    expect(realTasksFilter("Do nothing")).toBe(false);
    expect(realTasksFilter("Write documentation")).toBe(true);
  });
});
