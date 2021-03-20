# base45

_base45_ is a robust base45 encoder/decoder that is fully compatible [draft-faltstrom-base45-02](https://www.ietf.org/id/draft-faltstrom-base45-02.txt).

## Installation

Via [npm](https://www.npmjs.com/):

```bash
npm install base45
```

```js
var base45 = require('base45');
```

## API
### `base45.encode(input)`

This function takes a byte string (the `input` parameter) and encodes it according to base45. The input data must be in the form of a string containing only characters in the range from U+0000 to U+00FF, each representing a binary byte with values `0x00` to `0xFF`.

```js
var encodedData = base45.encode(input);
```

To base45-encode any Unicode string, [encode it as UTF-8 first](https://github.com/mathiasbynens/utf8.js#utf8encodestring):

```js
var base45 = require('base45');
var utf8 = require('utf8');

var text = 'foo © bar 𝌆 baz';
var bytes = utf8.encode(text);
var encoded = base45.encode(bytes);
console.log(encoded);
// → 'X.C82EIROA44GECH74C-J1/GUJCW2'
```

### `base45.decode(input)`

This function takes a base45-encoded string (the `input` parameter) and decodes it. The return value is in the form of a string containing only characters in the range from U+0000 to U+00FF, each representing a binary byte with values `0x00` to `0xFF`. 

```js
var decodedData = base45.decode(encodedData);
```

To base45-decode UTF-8-encoded data back into a Unicode string, [UTF-8-decode it](https://github.com/mathiasbynens/utf8.js#utf8decodebytestring) after base45-decoding it:

```js
var encoded = 'X.C82EIROA44GECH74C-J1/GUJCW2';
var bytes = base45.decode(encoded);
var text = utf8.decode(bytes);
console.log(text);
// → 'foo © bar 𝌆 baz'
```

## Author

| (https://twitter.com/landgren "Follow @landgren on Twitter") |
|---|

## License

_base45_ is available under the [MIT](https://opensource.org/licenses/mit-license.php) license.