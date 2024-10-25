import { sumAll } from "../src/sum"

const table = [
  [[10, 10, 10], 30],
  [[10, 30, 20, 10], 70],
  [[10, 30, 20, 10, 10, 10, 10, 10, 10, 10], 130]
]

test.each(table)("test sumAll(%s) should result %i", (numbers, expected) => {
  expect(sumAll(numbers)).toBe(expected)
})

const tableDesctructuring = [
  {numbers: [10, 10, 10], expected: 30},
  {numbers: [10, 30, 20, 10], expected: 70},
  {numbers: [10, 30, 20, 10, 10, 10, 10, 10, 10, 10], expected: 130}
]

test.each(tableDesctructuring)("test sumAll($numbers) should result expected", ({numbers, expected}) => {
  expect(sumAll(numbers)).toBe(expected)
})