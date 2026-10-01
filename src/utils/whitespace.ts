// Hoist regular expression to module scope to eliminate repeated RegExp allocations on every function call.
const WHITE_SPACE_REGEX =
  /^[\s\f\n\r\t\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u2028\u2029\u202f\u205f\u3000\ufeff\x09\x0a\x0b\x0c\x0d\x20\xa0]+$/;

/**
 * Checks whether a string is empty or contains only whitespace characters.
 * Evaluates empty strings early to bypass regular expression execution.
 */
export function isEmptyOrBlank(value: string) {
  return value === "" || WHITE_SPACE_REGEX.test(value);
}
