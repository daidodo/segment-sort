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

# APIs

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

[index.ts:13](https://github.com/daidodo/segment-sort/blob/505fd62/src/index.ts#L13)

---

### CompareRule

Ƭ **CompareRule**: [`SegSymbol`](README.md#segsymbol)[]

String comparison rule.

#### Defined in

[types.ts:16](https://github.com/daidodo/segment-sort/blob/505fd62/src/types.ts#L16)

---

### SegSymbol

Ƭ **SegSymbol**: `"az"` \| `"AZ"` \| `"aA"` \| `"Aa"` \| `"_"`

Symbols for char segments:

- _az_ - Lower case letters, i.e. [a-z].
- _AZ_ - Upper case letters, i.e. [A-Z].
- _aA_ - Both case letters and lower case first, i.e. [a-zA-Z] and `'a' < 'A' < 'b' < 'B' < ...`
- _Aa_ - Both case letters and upper case first, i.e. [a-zA-Z] and `'A' < 'a' < 'B' < 'b' < ...`
- \_ - Chars with ASCII from 91 to 96, i.e. `[`, `\`, `]`, `^`, `_` , `` ```(backtick).

#### Defined in

[types.ts:11](https://github.com/daidodo/segment-sort/blob/505fd62/src/types.ts#L11)

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

[index.ts:22](https://github.com/daidodo/segment-sort/blob/505fd62/src/index.ts#L22)

# License

MIT © Zhao DAI <daidodo@gmail.com>
