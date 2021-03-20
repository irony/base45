const charset = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ $%*+-./:'
const divmod = (x, y) => [Math.floor(x / y), x % y]

// Encode a string to base45-encoded string
const encode = (string) => {
  const buffer = Buffer.from(string)
  let res = ''
  for (let i = 0; i < buffer.length; i = i + 2) {
    if (buffer.length - i > 1) {
      const x = (buffer[i] << 8) + buffer[i + 1]
      const [e, rest] = divmod(x, 45 * 45)
      const [d, c] = divmod(rest, 45)
      res += charset[c] + charset[d] + charset[e]
    } else {
      const [d, c] = divmod(buffer[i], 45)
      res += charset[c] + charset[d]
    }
  }
  return res
}

// Decode base45-encoded string
const decode = (string) => {
  const buffer = Array.from(string).map(c => charset.indexOf(c))
  const res = []
  for (let i = 0; i < buffer.length; i = i + 3) {
    if (buffer.length - i >= 3) {
      const x = buffer[i] + buffer[i + 1] * 45 + buffer[i + 2] * 45 * 45
      res.push(...divmod(x, 256))
    } else {
      const x = buffer[i] + buffer[i + 1] * 45
      res.push(x)
    }
  }
  return String.fromCharCode(...res)
}

module.exports = {
  encode,
  decode
}