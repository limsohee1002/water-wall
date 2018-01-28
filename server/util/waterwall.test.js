const waterwall = require('./waterwall');

test('should return array', () => {
  expect(Array.isArray(waterwall([2, 1, 2]))).toBe(true)
})

test('should return [0, 0, 0] when no water collected (input: [1, 1, 1])', () => {
  expect(waterwall([1, 1, 1])).toEqual([0, 0, 0])
})

test('should return [0, 0, 0] when no water collected (input: [0, 2, 4])', () => {
  expect(waterwall([0, 2, 4])).toEqual([0, 0, 0])
})

test('should return [0, 0, 0] when no water collected (input: [8, 4, 2])', () => {
  expect(waterwall([8, 4, 2])).toEqual([0, 0, 0])
})

test('should return start wall index, end wall index, total water volume (output: [0, 4, 9]) when water collected (input: [6, 2, 3, 4, 9])', () => {
  expect(waterwall([6, 2, 3, 4, 9])).toEqual([0, 4, 9])
})

test('should return start wall index, end wall index, total water volume of largest volume of water (output: [4, 10, 29]) when water collected (input: [3, 4, 8, 1, 9, 1, 1, 1, 1, 7, 8, 3])', () => {
  expect(waterwall([3, 4, 8, 1, 9, 1, 1, 1, 1, 7, 8, 3])).toEqual([4, 10, 29])
})

test('should return start wall index, end wall index, total water volume of largest volume of water (output: [0, 0, 0]) when water collected (input: [5, 6, 1, 1, 6, 1, 6])', () => {
  expect(waterwall([5, 6, 1, 1, 6, 1, 6])).toEqual([1, 4, 10])
})