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

  it("filters non-tasks properly", () => {
    expect(realTasksFilter("No tasks added")).toBe(false);
    expect(realTasksFilter("Task completed")).toBe(false);
    expect(realTasksFilter("Do nothing")).toBe(false);
    expect(realTasksFilter("Valid task to execute")).toBe(true);
  });

  it("extracts and filters completed tasks correctly", () => {
    const modelResult = `["Task 1", "Task 2", "No further tasks required"]`;
    const result = extractTasks(modelResult, ["Task 1"]);
    expect(result).toEqual(["Task 2"]);
  });
});
