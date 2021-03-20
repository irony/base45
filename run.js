const {decode, encode} = require('./lib/base45')

console.log(decode(encode('Hello!!')))
