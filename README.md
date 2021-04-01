# base45

_base45_ is a base45 encoder/decoder that is fully compatible [draft-faltstrom-base45-02](https://www.ietf.org/id/draft-faltstrom-base45-02.txt).

[![Node.js Package](https://github.com/irony/base45/actions/workflows/npm-publish.yml/badge.svg)](https://github.com/irony/base45/actions/workflows/npm-publish.yml)

## Introduction

When using QR or Aztec codes a different encoding scheme is needed than the already established base 64, base 32 and base 16 encoding

## Installation

Via [npm](https://www.npmjs.com/):

```bash
npm install base45
```

```js
const base45 = require('base45');
```

## API
### `base45.encode(input)`

This function takes a byte string (the `input` parameter) and encodes it according to base45. The input data must be in the form of a string containing only characters in the range from U+0000 to U+00FF, each representing a binary byte with values `0x00` to `0xFF` or a binary buffer in the same range.

```js
const encodedData = base45.encode(input);
```

To base45-encode a utf8 encoded string.

```js
const base45 = require('base45');
const text = 'foo © bar 𝌆 baz';
const encoded = base45.encode(text);
console.log(encoded);
// → 'X.C82EIROA44GECH74C-J1/GUJCW2'
```

### `base45.decode(input)`

This function takes a base45-encoded string (the `input` parameter) and decodes it and returns a buffer. (BREAKING: THIS WAS PREVIOUSLY A STRING IN 2.X version)

```js
const decodedData = base45.decode(encodedData);
const text = base45.decode(encoded).toString('utf-8');
console.log(text);
// → 'foo © bar 𝌆 baz'
```

## Author

| (https://twitter.com/landgren "Follow @landgren on Twitter") |

## License

_base45_ is available under the [MIT](https://opensource.org/licenses/mit-license.php) license.