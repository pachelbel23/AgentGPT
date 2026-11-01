import { describe, expect, it } from "@jest/globals";

import { ENGLISH, findLanguage, languages } from "../src/utils/languages";

describe("findLanguage", () => {
  it("finds language by code", () => {
    expect(findLanguage("en")).toEqual(ENGLISH);
    expect(findLanguage("fr")).toEqual({ code: "fr", name: "Français", flag: "🇫🇷" });
    expect(findLanguage("ja")).toEqual({ code: "ja", name: "日本語", flag: "🇯🇵" });
  });

  it("finds language by formatted name with flag prefix", () => {
    expect(findLanguage("🇫🇷  Français")).toEqual({ code: "fr", name: "Français", flag: "🇫🇷" });
    expect(findLanguage("🇯🇵  日本語")).toEqual({ code: "ja", name: "日本語", flag: "🇯🇵" });
  });

  it("returns ENGLISH fallback for unknown language codes or names", () => {
    expect(findLanguage("unknown")).toEqual(ENGLISH);
    expect(findLanguage("")).toEqual(ENGLISH);
  });

  it("finds all available languages accurately", () => {
    for (const lang of languages) {
      expect(findLanguage(lang.code)).toEqual(lang);
      expect(findLanguage(`${lang.flag}  ${lang.name}`)).toEqual(lang);
    }
  });
});
