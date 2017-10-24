'use strict'

const lexint = require('lexicographic-integer-encoding')

module.exports = function factory (opts) {
  const encode = lexint('hex', opts).encode
  const separator = (opts && opts.separator) || '.'

  let previous
  let count = 0

  return function uli (n) {
    if (n == null) {
      throw new TypeError('Argument may not be null or undefined')
    } else if (n === previous) {
      count++
      return encode(n) + separator + encode(count)
    } else {
      previous = n
      count = 0
      return encode(n)
    }
  }
}
