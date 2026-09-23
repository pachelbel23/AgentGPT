import { isEmptyOrBlank } from "../src/utils/whitespace";

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
  test("Non-empty text string should return false", () => {
    const textString = "Hello Agent";
    expect(isEmptyOrBlank(textString)).toEqual(false);
  });
  test("String with leading/trailing spaces and content should return false", () => {
    const paddedString = "  Hello Agent  ";
    expect(isEmptyOrBlank(paddedString)).toEqual(false);
  });
});
