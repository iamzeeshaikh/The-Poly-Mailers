/**
 * Header-injection guard.
 *
 * Any character that a mail transfer agent would treat as ending a header line
 * must never survive into a From, Reply-To or Subject value. That includes the
 * two obvious ones (CR, LF) and the two Unicode line terminators that some
 * parsers also honour (U+2028, U+2029).
 *
 * Built with RegExp and explicit escapes rather than a literal so the pattern
 * cannot be broken by the very characters it is meant to catch.
 */
export const HEADER_INJECTION = new RegExp('[\\r\\n\\u2028\\u2029]');

export function hasHeaderInjection(value: string): boolean {
  return HEADER_INJECTION.test(value);
}

/** Strip anything that could break a header, for values we still want to send. */
export function stripHeaderBreaks(value: string): string {
  return value.replace(new RegExp('[\\r\\n\\u2028\\u2029]', 'g'), ' ').trim();
}
