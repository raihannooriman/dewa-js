import { sayHelloAsync } from "../src/async"

test("test async function", async () => {
  const result = await sayHelloAsync("Raihan")
  expect(result).toBe("Hello Raihan")
})

test("test async matchers", async () => {
  await expect(sayHelloAsync("Raihan")).resolves.toBe("Hello Raihan")
  await expect(sayHelloAsync()).rejects.toBe("Name is empty")
})