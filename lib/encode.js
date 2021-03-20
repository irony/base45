const charset = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ $%*+-./:'
const divmod = (x, y) => [Math.floor(x / y), x % y]

const encode = (string) => {
  const buffer = Buffer.from(string)
  let res = ''
  for (let i = 0; i<buffer.length; i=i+2) {
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

module.exports = encode
