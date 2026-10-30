import { findLanguage, ENGLISH } from "../src/utils/languages";

describe("findLanguage", () => {
  test("finds language by code", () => {
    expect(findLanguage("fr")).toEqual({ code: "fr", name: "Français", flag: "🇫🇷" });
    expect(findLanguage("ja")).toEqual({ code: "ja", name: "日本語", flag: "🇯🇵" });
    expect(findLanguage("en")).toEqual(ENGLISH);
  });

  test("finds language by emoji-prefixed name", () => {
    expect(findLanguage("🇫🇷  Français")).toEqual({ code: "fr", name: "Français", flag: "🇫🇷" });
    expect(findLanguage("🇯🇵  日本語")).toEqual({ code: "ja", name: "日本語", flag: "🇯🇵" });
  });

  test("returns ENGLISH default for unknown locale or invalid input", () => {
    expect(findLanguage("unknown")).toEqual(ENGLISH);
    expect(findLanguage("")).toEqual(ENGLISH);
  });
});
