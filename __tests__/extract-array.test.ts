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

  it("handles empty or invalid array input", () => {
    expect(extractArray("No array here")).toEqual([]);
  });
});

describe("realTasksFilter", () => {
  it("filters out system messages like 'No tasks added'", () => {
    expect(realTasksFilter("No tasks added")).toBe(false);
    expect(realTasksFilter("No further tasks needed")).toBe(false);
    expect(realTasksFilter("Task complete")).toBe(false);
    expect(realTasksFilter("Do nothing")).toBe(false);
  });

  it("retains valid tasks", () => {
    expect(realTasksFilter("Analyze market trends")).toBe(true);
    expect(realTasksFilter("Build prototype")).toBe(true);
  });
});

describe("extractTasks", () => {
  it("extracts and filters out completed tasks and non-tasks", () => {
    const jsonInput = `["Task 1", "Task 2", "No tasks added"]`;
    const completed = ["Task 1"];

    const result = extractTasks(jsonInput, completed);
    expect(result).toEqual(["Task 2"]);
  });
});
