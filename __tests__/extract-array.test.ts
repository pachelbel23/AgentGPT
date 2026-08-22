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

  it("realTasksFilter should correctly filter out no-task responses", () => {
    expect(realTasksFilter("No tasks required")).toBe(false);
    expect(realTasksFilter("No new tasks needed")).toBe(false);
    expect(realTasksFilter("Task completed")).toBe(false);
    expect(realTasksFilter("Do nothing")).toBe(false);
    expect(realTasksFilter("Valid task to perform")).toBe(true);
  });

  it("extractTasks should filter invalid and completed tasks", () => {
    const text = '["Task 1", "Task 2", "No tasks needed", "Task 3"]';
    const completedTasks = ["Task 1"];
    const result = extractTasks(text, completedTasks);
    expect(result).toEqual(["Task 2", "Task 3"]);
  });
});
