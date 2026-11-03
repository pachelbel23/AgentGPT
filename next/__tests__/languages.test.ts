import { ENGLISH, findLanguage } from "../src/utils/languages";

describe("findLanguage", () => {
  it("finds language by code", () => {
    expect(findLanguage("fr")).toEqual({ code: "fr", name: "Français", flag: "🇫🇷" });
    expect(findLanguage("en")).toEqual(ENGLISH);
  });

  it("finds language by formatted name with flag prefix", () => {
    expect(findLanguage("🇫🇷  Français")).toEqual({ code: "fr", name: "Français", flag: "🇫🇷" });
  });

  it("defaults to ENGLISH for unknown language", () => {
    expect(findLanguage("unknown")).toEqual(ENGLISH);
  });
});
