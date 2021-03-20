/* eslint-disable no-undef */
const { encode } = require('../lib/base45')
const cases = [
  ['Hello!!', '%69 VD92EX0'],
  ['AB', 'BB8'],
  ['base-45', 'UJCLQE7W581'],
  ['ietf!', 'QED8WEX0'],
  [
    'The quick brown fox jumps over the lazy dog',
    '8UADZCKFEOEDJOD2KC54EM-DX.CH8FSKDQ$D.OE44E5$CS44+8DK44OEC3EFGVCD2'
  ]
]

describe('encoding', () => {
  test('all test cases encode correctly', () => {
    cases.forEach(([text, expected]) => {
      const result = encode(text)
      expect(result).toEqual(expected)
    })
  })
})
