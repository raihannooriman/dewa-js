import { sum } from "../src/sum"

beforeAll(() => {
  console.log('beforeAll')
})
afterAll(() => {
  console.log('afterAll')
})

beforeEach(() => {
  console.log('beforeEach')
})
afterEach(() => {
  console.log('afterEach')
})

test("test 1", () => {
  expect(sum(10, 10)).toBe(20)
  console.log('test 1')
})
test("test 2", () => {
  expect(sum(10, 10)).toBe(20)
  console.log('test 2')
})