const { encode, decode } = require('./')
const text = 'foo © bar 𝌆 baz'

console.log(decode(encode(text)))
