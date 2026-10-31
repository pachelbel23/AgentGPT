import { ENGLISH, findLanguage } from "../src/utils/languages";

describe("findLanguage", () => {
  it("finds language by code", () => {
    expect(findLanguage("es")).toEqual({ code: "es", name: "Español", flag: "🇪🇸" });
    expect(findLanguage("ja")).toEqual({ code: "ja", name: "日本語", flag: "🇯🇵" });
    expect(findLanguage("en")).toEqual(ENGLISH);
  });

  it("finds language by string starting with flag emoji followed by name", () => {
    expect(findLanguage("🇪🇸 Español")).toEqual({
      code: "es",
      name: "Español",
      flag: "🇪🇸",
    });
    expect(findLanguage("🇯🇵 日本語")).toEqual({
      code: "ja",
      name: "日本語",
      flag: "🇯🇵",
    });
  });

  it("falls back to ENGLISH when language is not found", () => {
    expect(findLanguage("non-existent")).toEqual(ENGLISH);
    expect(findLanguage("")).toEqual(ENGLISH);
  });
});
