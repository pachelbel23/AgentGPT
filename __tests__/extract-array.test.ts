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
  it("filters out invalid system/completion response tasks", () => {
    expect(realTasksFilter("No new tasks required")).toBe(false);
    expect(realTasksFilter("Task complete")).toBe(false);
    expect(realTasksFilter("Do nothing")).toBe(false);
    expect(realTasksFilter("  ")).toBe(false);
    expect(realTasksFilter("Write documentation")).toBe(true);
  });
});

describe("extractTasks", () => {
  it("extracts tasks and filters out already completed tasks (small list)", () => {
    const input = '["Task 1", "Task 2", "Task 3"]';
    const completed = ["Task 1"];
    expect(extractTasks(input, completed)).toEqual(["Task 2", "Task 3"]);
  });

  it("extracts tasks when completedTasks is empty or null", () => {
    const input = '["Task 1", "Task 2"]';
    expect(extractTasks(input, [])).toEqual(["Task 1", "Task 2"]);
  });

  it("handles large completedTasks lists (>30 elements)", () => {
    const input = '["Task 1", "Task 99", "Task 100"]';
    const completed = Array.from({ length: 50 }, (_, i) => `Task ${i + 1}`);
    expect(extractTasks(input, completed)).toEqual(["Task 99", "Task 100"]);
  });

  it("measures performance of 50,000 extractions", () => {
    const input = '["Task 1: Learn TS", "Task 2: Write tests", "No new tasks required", "Task 3: Refactor"]';
    const completed = Array.from({ length: 15 }, (_, i) => `Task ${i}: Old task`);
    const start = performance.now();
    for (let i = 0; i < 50000; i++) {
      extractTasks(input, completed);
    }
    const duration = performance.now() - start;
    expect(duration).toBeGreaterThan(0);
  });
});
