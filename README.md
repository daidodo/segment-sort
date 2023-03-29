# Segment Sort

<!--
First publish:

```sh
npm publish --access public
```
-->

[![npm](https://img.shields.io/npm/v/segment-sort.svg)](https://www.npmjs.com/package/segment-sort)
![Downloads](https://img.shields.io/npm/dm/segment-sort.svg)
[![Build Status](https://github.com/daidodo/segment-sort/actions/workflows/node.js.yml/badge.svg)](https://github.com/daidodo/segment-sort/actions)

Create string sort algorithm from segment config.

# Usage

```sh
npm i segment-sort
```

```ts
import segmentSorter from 'segment-sort';

// Case sensitive, upper < lower < _
const comparator1 = segmentSorter(['AZ', 'az', '_']);
['a', 'b', 'A', 'B', '_'].sort(comparator1); // ['A', 'B', a', 'b', '_']

// Case insensitive, lower < upper < _
const comparator2 = segmentSorter(['aA', '_']);
['a', 'b', 'A', 'B', '_'].sort(comparator2); // ['a', 'A', 'b', 'B', '_']
```

For more info, please check the APIs.

# APIs Documentation

## Type Aliases

### Comparator

Ƭ **Comparator**: (`a`: `string` \| `undefined`, `b`: `string` \| `undefined`) => `number`

#### Type declaration

▸ (`a`, `b`): `number`

Type of a function to compare two strings.

##### Parameters

| Name | Type                    |
| :--- | :---------------------- |
| `a`  | `string` \| `undefined` |
| `b`  | `string` \| `undefined` |

##### Returns

`number`

0 if `a === b`; or negative if `a < b`; or positive if `a > b`

#### Defined in

[index.ts:13](https://github.com/daidodo/segment-sort/blob/3c7ef1b/src/index.ts#L13)

---

### CompareRule

Ƭ **CompareRule**: [`SegSymbol`](README.md#segsymbol)[]

String comparison rule.

#### Defined in

[types.ts:16](https://github.com/daidodo/segment-sort/blob/3c7ef1b/src/types.ts#L16)

---

### SegSymbol

Ƭ **SegSymbol**: `"az"` \| `"AZ"` \| `"aA"` \| `"aZ"` \| `"Aa"` \| `"Az"` \| `"_"`

Symbols for char segments:

- _az_ - Lower case letters, i.e. [a-z].
- _AZ_ - Upper case letters, i.e. [A-Z].
- _aA_ or _aZ_ - Both case letters and lower case first, i.e. [a-zA-Z] and `'a' < 'A' < 'b' < 'B' < ...`
- _Aa_ or _Az_ - Both case letters and upper case first, i.e. [a-zA-Z] and `'A' < 'a' < 'B' < 'b' < ...`
- _ - Chars with ASCII from 91 to 96, i.e. `[`, `\`, `]`, `^`, `_` , ```  ` ```(backtick).

#### Defined in

[types.ts:11](https://github.com/daidodo/segment-sort/blob/3c7ef1b/src/types.ts#L11)

## Functions

### default

▸ **default**(`rule`): `undefined` \| [`Comparator`](README.md#comparator)

Generate a string comparison function based on the given rule.

#### Parameters

| Name   | Type                                   | Description     |
| :----- | :------------------------------------- | :-------------- |
| `rule` | [`CompareRule`](README.md#comparerule) | Comparison rule |

#### Returns

`undefined` \| [`Comparator`](README.md#comparator)

A string comparison function; or `undefined` if rule is invalid

#### Defined in

[index.ts:22](https://github.com/daidodo/segment-sort/blob/3c7ef1b/src/index.ts#L22)

# Algorithm

The key of segment-sort is to define a `CompareRule` so it creates a custom string sort algorithm for you.

## Compare Rule

A `CompareRule` is an array of **segment**s.

### Segment

A segment is a collection of characters with a sorting rule. Currently, there are 5 predefined segments:

- `"az"`: Lower-case letters (`[a-z]`) sorted alphabetically.
- `"AZ"`: Upper-case letters(`[A-Z]`) sorted alphabetically.
- `"aA"` or `"aZ"`: Both case letters (`[a-zA-Z]`) sorted case-insensitively and lower case first in case of a tie (`'a' < 'A' < 'b' < 'B' < ...`).
- `"Aa"` or `"Az"`: Both case letters (`[a-zA-Z]`) sorted case-insensitively and upper case first in case of a tie (`'A' < 'a' < 'B' < 'b' < ...`).
- `"_"` - Chars of ASCII from 91 to 96, i.e. `[`, `\`, `]`, `^`, `_`, `` ` ``(backtick), sorted alphabetically.

### Case Sensitivity

The segments used in `CompareRule` implicitly decide whether to compare strings case-sensitively or -insensitively:

- `"az"` or `"AZ"`: Compare strings _case-sensitively_;
- `"aA"`, `"Aa"`, `"aZ"` or `"Az"`: Compare strings _case-insensitively_;

## Some Examples

### `["_", "aA"]` or `["_", "aZ"]`

- Strings are compared case-insensitively, and lower case goes first in case of a tie.
- `[`, `\`, `]`, `^`, `_`, `` ` ``(backtick) are in front of letters (`[a-zA-Z]`).

A sorted example is `['_', 'a', 'A', 'b', 'B']`.

### `["Aa", "_"]` or `["Az", "_"]`

- Strings are compared case-insensitively, and upper case goes first in case of a tie.
- `[`, `\`, `]`, `^`, `_`, `` ` ``(backtick) are after letters (`[a-zA-Z]`).

This is widely used, e.g. as the default option (`"case-insensitive"`) in [TSLint Rule: ordered-imports](https://palantir.github.io/tslint/rules/ordered-imports/). A sorted example is `['A', 'a', 'B', 'b', '_']`.

### `["az", "_", "AZ"]`

- Strings are compared case-sensitively, and lower-case letters (`[a-z]`) are in front of upper-case letters (`[A-Z]`).
- `[`, `\`, `]`, `^`, `_`, `` ` ``(backtick) are behind lower-case letters and before upper-case letters.

This corresponds to `"lowercase-first"` in [TSLint Rule: ordered-imports](https://palantir.github.io/tslint/rules/ordered-imports/). A sorted example is `['a', 'b', '_', 'A', 'B']`.

### `["AZ", "_", "az"]`

- Strings are compared case-sensitively, and upper-case letters (`[A-Z]`) are in front of lower-case letters (`[a-z]`).
- `[`, `\`, `]`, `^`, `_`, `` ` ``(backtick) are behind upper-case letters and before lower-case letters.

This corresponds to `"lowercase-last"` in [TSLint Rule: ordered-imports](https://palantir.github.io/tslint/rules/ordered-imports/).

A sorted example is `['A', 'B', '_', 'a', 'b']`.

## Incomplete Rules

The algorithm in this package is smart enough to complete `CompareRule` by appending missing segments in the end.

For example, `["az", "_"]` will be padded with `"AZ"`, and equals to `["az", "_", "AZ"]`.

But it will give up if there is uncertainty. For example, `["az"]` can't be completed as the order between `"_"` and `"AZ"` is unknown, hence `undefined` is returned.

Here are some incomplete but meaningful rules:

- `["az", "_"]` => `["az", "_", "AZ"]`
- `["AZ", "_"]` => `["AZ", "_", "az"]`
- `["Aa"]` => `["Aa", "_"]`
- `["aA"]` => `["aA", "_"]`

## Overlapped Rules

When segments overlap with each other, the one that appears first takes effect.

For example, `["aA", "az"]` is equal to `["aA"]` because `"az"` is covered by previous `"aA"`.

`["az", "aA"]` is equal to `["az", "AZ"]` because the lower-case part of `"aA"` is overlapped, but not the upper-case part.

The algorithm tolerates overlapped rules for better usability but you are not recommended to use them in your projects.

# License

MIT © Zhao DAI <daidodo@gmail.com>
