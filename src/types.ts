/* eslint-disable tsdoc/syntax */

/**
 * Symbols for char segments:
 * - _az_ - Lower case letters, i.e. [a-z].
 * - _AZ_ - Upper case letters, i.e. [A-Z].
 * - _aA_ or _aZ_ - Both case letters and lower case first, i.e. [a-zA-Z] and `'a' < 'A' < 'b' < 'B' < ...`
 * - _Aa_ or _Az_ - Both case letters and upper case first, i.e. [a-zA-Z] and `'A' < 'a' < 'B' < 'b' < ...`
 * - _ - Chars with ASCII from 91 to 96, i.e. `[`, `\`, `]`, `^`, `_`, ``` ` ```(backtick).
 */
export type SegSymbol = 'az' | 'AZ' | 'aA' | 'aZ' | 'Aa' | 'Az' | '_';

/**
 * String comparison rule.
 */
export type CompareRule = SegSymbol[];
