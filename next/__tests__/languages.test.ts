import { ENGLISH, findLanguage, languages } from "../src/utils/languages";

describe("findLanguage", () => {
  test("finds language by language code", () => {
    for (const lang of languages) {
      expect(findLanguage(lang.code)).toEqual(lang);
    }
  });

  test("finds language by formatted string containing flag and name", () => {
    for (const lang of languages) {
      // Formatted name like "🇺🇸  English" or flag + 2 spaces + name
      expect(findLanguage(`${lang.flag}  ${lang.name}`)).toEqual(lang);
    }
  });

  test("falls back to ENGLISH for unknown codes or strings", () => {
    expect(findLanguage("")).toEqual(ENGLISH);
    expect(findLanguage("unknown")).toEqual(ENGLISH);
    expect(findLanguage("xx-YY")).toEqual(ENGLISH);
  });
});
