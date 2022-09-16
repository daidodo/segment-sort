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

# License

MIT © Zhao DAI <daidodo@gmail.com>
