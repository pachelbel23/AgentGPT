import { ENGLISH, availableLanguages, findLanguage } from "../src/utils/languages";

describe("findLanguage", () => {
  it("resolves languages by locale code", () => {
    expect(findLanguage("en")).toEqual(ENGLISH);
    expect(findLanguage("fr")).toEqual({ code: "fr", name: "Français", flag: "🇫🇷" });
    expect(findLanguage("es")).toEqual({ code: "es", name: "Español", flag: "🇪🇸" });
    expect(findLanguage("ja")).toEqual({ code: "ja", name: "日本語", flag: "🇯🇵" });
    expect(findLanguage("zhtw")).toEqual({ code: "zhtw", name: "繁體中文", flag: "🇹🇼" });
  });

  it("resolves languages by display name with flag prefix", () => {
    expect(findLanguage("🇺🇸 English")).toEqual(ENGLISH);
    expect(findLanguage("🇫🇷 Français")).toEqual({ code: "fr", name: "Français", flag: "🇫🇷" });
    expect(findLanguage("🇹🇷 Türkçe")).toEqual({ code: "tr", name: "Türkçe", flag: "🇹🇷" });
    expect(findLanguage("🇷🇺 Русский")).toEqual({ code: "ru", name: "Русский", flag: "🇷🇺" });
  });

  it("falls back to ENGLISH for unknown or invalid inputs", () => {
    expect(findLanguage("")).toEqual(ENGLISH);
    expect(findLanguage("unknown")).toEqual(ENGLISH);
    expect(findLanguage("invalid-code")).toEqual(ENGLISH);
  });

  it("consistently matches all available languages by code", () => {
    for (const lang of availableLanguages) {
      expect(findLanguage(lang.code)).toEqual(lang);
    }
  });
});
