import { ENGLISH, findLanguage, languages } from "../src/utils/languages";

describe("findLanguage", () => {
  test("finds language by locale code", () => {
    expect(findLanguage("en")).toEqual(ENGLISH);
    expect(findLanguage("es")).toEqual(languages.find((l) => l.code === "es"));
    expect(findLanguage("ja")).toEqual(languages.find((l) => l.code === "ja"));
  });

  test("finds language by formatted name with flag prefix", () => {
    expect(findLanguage("🇺🇸 English")).toEqual(ENGLISH);
    expect(findLanguage("🇪🇸 Español")).toEqual(languages.find((l) => l.code === "es"));
  });

  test("falls back to ENGLISH for unknown language code or name", () => {
    expect(findLanguage("unknown")).toEqual(ENGLISH);
    expect(findLanguage("")).toEqual(ENGLISH);
  });
});
