import { ENGLISH, findLanguage, languages } from "../src/utils/languages";

describe("findLanguage", () => {
  it("should find a language by its code", () => {
    expect(findLanguage("fr")).toEqual({
      code: "fr",
      name: "Français",
      flag: "🇫🇷",
    });
    expect(findLanguage("ja")).toEqual({
      code: "ja",
      name: "日本語",
      flag: "🇯🇵",
    });
  });

  it("should find a language by its flag + name combination", () => {
    expect(findLanguage("🇫🇷 Français")).toEqual({
      code: "fr",
      name: "Français",
      flag: "🇫🇷",
    });
    expect(findLanguage("🇹🇷 Türkçe")).toEqual({
      code: "tr",
      name: "Türkçe",
      flag: "🇹🇷",
    });
  });

  it("should find all available languages by code", () => {
    languages.forEach((lang) => {
      expect(findLanguage(lang.code)).toEqual(lang);
    });
  });

  it("should fallback to ENGLISH when not found or invalid", () => {
    expect(findLanguage("unknown")).toEqual(ENGLISH);
    expect(findLanguage("")).toEqual(ENGLISH);
  });
});
