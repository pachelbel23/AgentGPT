import { ENGLISH, findLanguage } from "../src/utils/languages";

describe("findLanguage", () => {
  test("finds language by locale code", () => {
    expect(findLanguage("en")).toEqual(ENGLISH);
    expect(findLanguage("fr")).toEqual({ code: "fr", name: "Français", flag: "🇫🇷" });
    expect(findLanguage("es")).toEqual({ code: "es", name: "Español", flag: "🇪🇸" });
    expect(findLanguage("de")).toEqual({ code: "de", name: "Deutsch", flag: "🇩🇪" });
  });

  test("finds language by formatted name with flag prefix", () => {
    expect(findLanguage("🇺🇸  English")).toEqual(ENGLISH);
    expect(findLanguage("🇫🇷  Français")).toEqual({ code: "fr", name: "Français", flag: "🇫🇷" });
    expect(findLanguage("🇹🇷  Türkçe")).toEqual({ code: "tr", name: "Türkçe", flag: "🇹🇷" });
  });

  test("returns ENGLISH for unknown or invalid inputs", () => {
    expect(findLanguage("")).toEqual(ENGLISH);
    expect(findLanguage("unknown")).toEqual(ENGLISH);
    expect(findLanguage("xyz")).toEqual(ENGLISH);
  });
});
