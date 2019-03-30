# unique-lexicographic-integer

**[`lexicographic-integer`] plus a suffix if input is the same as the last call. Hex-encoded.**

[![npm status](http://img.shields.io/npm/v/unique-lexicographic-integer.svg?style=flat-square)](https://www.npmjs.org/package/unique-lexicographic-integer) [![node](https://img.shields.io/node/v/unique-lexicographic-integer.svg?style=flat-square)](https://www.npmjs.org/package/unique-lexicographic-integer) [![Travis build status](https://img.shields.io/travis/vweevers/unique-lexicographic-integer.svg?style=flat-square&label=travis)](http://travis-ci.org/vweevers/unique-lexicographic-integer) [![AppVeyor build status](https://img.shields.io/appveyor/ci/vweevers/unique-lexicographic-integer.svg?style=flat-square&label=appveyor)](https://ci.appveyor.com/project/vweevers/unique-lexicographic-integer) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg?style=flat-square)](https://standardjs.com) [![Dependency status](https://img.shields.io/david/vweevers/unique-lexicographic-integer.svg?style=flat-square)](https://david-dm.org/vweevers/unique-lexicographic-integer) [![Greenkeeper badge](https://badges.greenkeeper.io/vweevers/unique-lexicographic-integer.svg)](https://greenkeeper.io/)

## example

```js
const uli = require('unique-lexicographic-integer')
const encode = uli()

console.log(encode(0)) // '00'
console.log(encode(0)) // '00.01'
console.log(encode(1)) // '01'
console.log(encode(300)) // 'fb31'
console.log(encode(300)) // 'fb31.01'
console.log(encode(300)) // 'fb31.02'

const strict = uli({ strict: true })

try {
  strict('1')
} catch (err) {
  console.log(err.message) // 'Argument must be a valid number'
}
```

## api

### `encode = require('unique-lexicographic-integer')([options])`

- `options.separator` (string): defaults to `'.'`
- `options.strict` (boolean): opt-in to type-checking input. Handled by [`lexicographic-integer-encoding`]. If true, encode will throw:
  - A `TypeError` if input is not a number or if `NaN`
  - A `RangeError` if input is < 0 or > `Number.MAX_SAFE_INTEGER`.

## see also

- [`lexicographic-integer`]: main encoding logic
- [`lexicographic-integer-encoding`]: encoding for `level(up)`
- [`monotonic-lexicographic-timestamp`]: `unique-lexicographic-integer` with `Date.now()` as input to get a monotonically increasing timestamp with lexicographic order.

## install

With [npm](https://npmjs.org) do:

```
npm install unique-lexicographic-integer
```

## license

[MIT](http://opensource.org/licenses/MIT) © Vincent Weevers

[`lexicographic-integer`]: https://github.com/substack/lexicographic-integer
[`lexicographic-integer-encoding`]: https://github.com/vweevers/lexicographic-integer-encoding
[`monotonic-lexicographic-timestamp`]: https://github.com/vweevers/monotonic-lexicographic-timestamp
