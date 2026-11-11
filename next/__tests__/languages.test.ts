import { ENGLISH, findLanguage, languages } from "../src/utils/languages";

describe("findLanguage", () => {
  it("should find language by language code", () => {
    for (const lang of languages) {
      expect(findLanguage(lang.code)).toEqual(lang);
    }
  });

  it("should find language by formatted display name (flag + name)", () => {
    for (const lang of languages) {
      const formattedName = `${lang.flag} ${lang.name}`;
      expect(findLanguage(formattedName)).toEqual(lang);
    }
  });

  it("should fallback to ENGLISH when given an unknown code or name", () => {
    expect(findLanguage("non-existent-code")).toEqual(ENGLISH);
    expect(findLanguage("unknown language")).toEqual(ENGLISH);
  });

  it("should fallback to ENGLISH on empty string", () => {
    expect(findLanguage("")).toEqual(ENGLISH);
  });
});
