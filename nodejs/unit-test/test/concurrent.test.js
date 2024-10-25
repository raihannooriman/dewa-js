import { sayHelloAsync } from "../src/async"

it.concurrent("concurrent 1", async () => {
  await expect(sayHelloAsync("Han")).resolves.toBe("Hello Han")
})
it.concurrent("concurrent 2", async () => {
  await expect(sayHelloAsync("Han")).resolves.toBe("Hello Han")
})
it.concurrent("concurrent 3", async () => {
  await expect(sayHelloAsync("Han")).resolves.toBe("Hello Han")
})