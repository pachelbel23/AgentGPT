import { isEmptyOrBlank } from "../src/utils/whitespace";

describe("isEmptyOrBlank", () => {
  describe("WhiteSpace and empty string should return true", () => {
    test("Empty string should return true", () => {
      const emptyString = "";
      expect(isEmptyOrBlank(emptyString)).toEqual(true);
    });

    test("WhiteSpace string should return true", () => {
      const whiteSpaceString = "    ";
      expect(isEmptyOrBlank(whiteSpaceString)).toEqual(true);
    });

    test("NewLine should return true", () => {
      const newLineString = "\n\n";
      expect(isEmptyOrBlank(newLineString)).toEqual(true);
    });

    test("Tab and unicode spaces should return true", () => {
      const unicodeSpaces = "\t\r\n \u2000\u3000";
      expect(isEmptyOrBlank(unicodeSpaces)).toEqual(true);
    });
  });

  describe("Non-empty and non-whitespace strings should return false", () => {
    test("Regular text string should return false", () => {
      expect(isEmptyOrBlank("hello")).toEqual(false);
    });

    test("Text string with leading/trailing spaces should return false", () => {
      expect(isEmptyOrBlank("  hello  ")).toEqual(false);
    });

    test("Single character non-space should return false", () => {
      expect(isEmptyOrBlank("a")).toEqual(false);
    });
  });
});
