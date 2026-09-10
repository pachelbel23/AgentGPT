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
  it("filters out filler task strings from model outputs", () => {
    expect(realTasksFilter("No new tasks required.")).toBe(false);
    expect(realTasksFilter("Task completed")).toBe(false);
    expect(realTasksFilter("Do nothing")).toBe(false);
    expect(realTasksFilter("  ")).toBe(false);
    expect(realTasksFilter("Analyze market data and prepare report")).toBe(true);
  });
});

describe("extractTasks", () => {
  it("extracts and filters tasks with small completedTasks array", () => {
    const modelOutput = JSON.stringify([
      "Task A",
      "Task B",
      "No tasks needed",
      "Task C"
    ]);
    const completed = ["Task A"];
    const result = extractTasks(modelOutput, completed);
    expect(result).toEqual(["Task B", "Task C"]);
  });

  it("extracts and filters tasks with large completedTasks array (>= 30 elements)", () => {
    const completed = Array.from({ length: 35 }, (_, i) => `Task ${i}`);
    const modelOutput = JSON.stringify([
      "Task 0",
      "Task 34",
      "Task 35",
      "Task 36",
      "No extra tasks added"
    ]);
    const result = extractTasks(modelOutput, completed);
    expect(result).toEqual(["Task 35", "Task 36"]);
  });
});
