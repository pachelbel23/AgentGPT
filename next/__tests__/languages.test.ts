import { ENGLISH, findLanguage, languages } from "../src/utils/languages";

describe("findLanguage", () => {
  test("should find language by code", () => {
    expect(findLanguage("en")).toEqual(ENGLISH);
    expect(findLanguage("fr")).toEqual({ code: "fr", name: "Français", flag: "🇫🇷" });
    expect(findLanguage("ja")).toEqual({ code: "ja", name: "日本語", flag: "🇯🇵" });
    expect(findLanguage("tr")).toEqual({ code: "tr", name: "Türkçe", flag: "🇹🇷" });
  });

  test("should find language by flag and name format", () => {
    expect(findLanguage("🇺🇸 English")).toEqual(ENGLISH);
    expect(findLanguage("🇫🇷 Français")).toEqual({ code: "fr", name: "Français", flag: "🇫🇷" });
    expect(findLanguage("🇹🇷 Türkçe")).toEqual({ code: "tr", name: "Türkçe", flag: "🇹🇷" });
  });

  test("should fallback to ENGLISH for unknown or invalid inputs", () => {
    expect(findLanguage("unknown")).toEqual(ENGLISH);
    expect(findLanguage("")).toEqual(ENGLISH);
    expect(findLanguage("xx")).toEqual(ENGLISH);
  });

  test("should match all available languages by code", () => {
    for (const lang of languages) {
      expect(findLanguage(lang.code)).toEqual(lang);
    }
  });

  test("should match all available languages by formatted name", () => {
    for (const lang of languages) {
      expect(findLanguage(`${lang.flag} ${lang.name}`)).toEqual(lang);
    }
  });
});
