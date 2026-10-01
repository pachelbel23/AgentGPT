// Hoisted RegExp to module scope to avoid re-instantiating on every isEmptyOrBlank call
const WHITE_SPACE_REGEX =
  /^[\s\f\n\r\t\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u2028\u2029\u202f\u205f\u3000\ufeff\x09\x0a\x0b\x0c\x0d\x20\xa0]+$/;

/**
 * Checks if a string value is empty or consists purely of whitespace characters.
 * Short-circuits on empty string to avoid regex execution overhead.
 */
export function isEmptyOrBlank(value: string): boolean {
  return value === "" || WHITE_SPACE_REGEX.test(value);
}
