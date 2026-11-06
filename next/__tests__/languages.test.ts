import { availableLanguages, ENGLISH, findLanguage } from "../src/utils/languages";

describe("findLanguage", () => {
  it("should find language by code", () => {
    expect(findLanguage("en")).toEqual(ENGLISH);
    expect(findLanguage("fr")).toEqual({ code: "fr", name: "Français", flag: "🇫🇷" });
    expect(findLanguage("es")).toEqual({ code: "es", name: "Español", flag: "🇪🇸" });
    expect(findLanguage("tr")).toEqual({ code: "tr", name: "Türkçe", flag: "🇹🇷" });
  });

  it("should find language by formatted name with flag prefix", () => {
    expect(findLanguage("🇺🇸 English")).toEqual(ENGLISH);
    expect(findLanguage("🇪🇸 Español")).toEqual({ code: "es", name: "Español", flag: "🇪🇸" });
    expect(findLanguage("🇯🇵 日本語")).toEqual({ code: "ja", name: "日本語", flag: "🇯🇵" });
  });

  it("should find all available languages by code", () => {
    availableLanguages.forEach((lang) => {
      expect(findLanguage(lang.code)).toEqual(lang);
    });
  });

  it("should find all available languages by flag + name", () => {
    availableLanguages.forEach((lang) => {
      expect(findLanguage(`${lang.flag} ${lang.name}`)).toEqual(lang);
    });
  });

  it("should return ENGLISH for unknown code or empty string", () => {
    expect(findLanguage("unknown")).toEqual(ENGLISH);
    expect(findLanguage("")).toEqual(ENGLISH);
    expect(findLanguage("xyz")).toEqual(ENGLISH);
  });
});
