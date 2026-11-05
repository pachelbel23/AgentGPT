import { ENGLISH, findLanguage, languages } from "../src/utils/languages";

describe("findLanguage", () => {
  it("finds language by code", () => {
    expect(findLanguage("en")).toEqual(ENGLISH);
    expect(findLanguage("fr")).toEqual({ code: "fr", name: "Français", flag: "🇫🇷" });
    expect(findLanguage("ja")).toEqual({ code: "ja", name: "日本語", flag: "🇯🇵" });
  });

  it("finds language by formatted name string", () => {
    languages.forEach((lang) => {
      const formatted = `${lang.flag}  ${lang.name}`;
      expect(findLanguage(formatted)).toEqual(lang);
    });
  });

  it("falls back to ENGLISH when language is not found", () => {
    expect(findLanguage("nonexistent-locale")).toEqual(ENGLISH);
    expect(findLanguage("")).toEqual(ENGLISH);
  });
});
