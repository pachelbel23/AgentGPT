import { ENGLISH, findLanguage } from "../src/utils/languages";

describe("findLanguage", () => {
  it("should find language by code", () => {
    expect(findLanguage("fr")).toEqual({ code: "fr", name: "Français", flag: "🇫🇷" });
    expect(findLanguage("en")).toEqual(ENGLISH);
    expect(findLanguage("ja")).toEqual({ code: "ja", name: "日本語", flag: "🇯🇵" });
  });

  it("should find language by name with flag prefix", () => {
    expect(findLanguage("🇺🇸  English")).toEqual(ENGLISH);
    expect(findLanguage("🇫🇷  Français")).toEqual({ code: "fr", name: "Français", flag: "🇫🇷" });
  });

  it("should return ENGLISH default when language is unknown or invalid", () => {
    expect(findLanguage("unknown")).toEqual(ENGLISH);
    expect(findLanguage("")).toEqual(ENGLISH);
  });
});
