import { ENGLISH, findLanguage } from "../src/utils/languages";

describe("findLanguage", () => {
  it("finds language by code", () => {
    expect(findLanguage("en")).toEqual(ENGLISH);
    expect(findLanguage("fr")).toEqual({ code: "fr", name: "Français", flag: "🇫🇷" });
    expect(findLanguage("ja")).toEqual({ code: "ja", name: "日本語", flag: "🇯🇵" });
  });

  it("finds language by name with flag prefix", () => {
    expect(findLanguage("🇺🇸 English")).toEqual(ENGLISH);
    expect(findLanguage("🇫🇷 Français")).toEqual({ code: "fr", name: "Français", flag: "🇫🇷" });
    expect(findLanguage("🇪🇸 Español")).toEqual({ code: "es", name: "Español", flag: "🇪🇸" });
  });

  it("defaults to ENGLISH when language is not found or invalid", () => {
    expect(findLanguage("")).toEqual(ENGLISH);
    expect(findLanguage("unknown")).toEqual(ENGLISH);
    expect(findLanguage("invalid-code")).toEqual(ENGLISH);
  });
});
