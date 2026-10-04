describe("Combobox option filtering optimization benchmark", () => {
  const filterUnoptimized = (options: string[], query: string) => {
    return query === ""
      ? options
      : options.filter((opt) =>
          opt.toLowerCase().includes(query.toLowerCase())
        );
  };

  const filterOptimized = (options: string[], query: string) => {
    if (query === "") {
      return options;
    }
    const lowerQuery = query.toLowerCase();
    return options.filter((opt) => opt.toLowerCase().includes(lowerQuery));
  };

  test("optimized filtering returns identical results to unoptimized logic", () => {
    const options = ["GPT-3.5", "GPT-4", "Claude 2", "PaLM 2", "Llama 2"];
    const queries = ["", "gpt", "CLAUDE", "2", "nonexistent"];

    queries.forEach((q) => {
      expect(filterOptimized(options, q)).toEqual(filterUnoptimized(options, q));
    });
  });

  test("optimized filtering avoids repeated query.toLowerCase() allocations and is faster", () => {
    const options = Array.from({ length: 5000 }, (_, i) => `Model Name Variant ${i} Extra String Data`);
    const query = "variant 49";

    const iterations = 500;

    const startUnoptimized = performance.now();
    for (let i = 0; i < iterations; i++) {
      filterUnoptimized(options, query);
    }
    const durationUnoptimized = performance.now() - startUnoptimized;

    const startOptimized = performance.now();
    for (let i = 0; i < iterations; i++) {
      filterOptimized(options, query);
    }
    const durationOptimized = performance.now() - startOptimized;

    console.log(`Unoptimized: ${durationUnoptimized.toFixed(2)}ms`);
    console.log(`Optimized: ${durationOptimized.toFixed(2)}ms`);

    expect(durationOptimized).toBeLessThanOrEqual(durationUnoptimized);
  });
});
