import { sayHello } from "../src/sayHello"

test.failing("sayHello Failed", () => {
  sayHello(null)
  expect(()=>sayHello(null)).toThrow()
})