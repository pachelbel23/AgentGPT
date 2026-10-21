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

describe("realTasksFilter", () => {
  it("filters out invalid model response tasks", () => {
    expect(realTasksFilter("No new tasks required")).toBe(false);
    expect(realTasksFilter("Task complete")).toBe(false);
    expect(realTasksFilter("Do nothing")).toBe(false);
    expect(realTasksFilter("Research user feedback")).toBe(true);
  });
});

describe("extractTasks", () => {
  it("extracts tasks and filters out completed tasks", () => {
    const text = '["Task 1", "Task 2", "Task 3"]';
    expect(extractTasks(text, [])).toEqual(["Task 1", "Task 2", "Task 3"]);
    expect(extractTasks(text, ["Task 2"])).toEqual(["Task 1", "Task 3"]);
  });
});
