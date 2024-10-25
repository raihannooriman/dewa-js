import { getBalance } from "../src/async"

test("mock async function", async () => {
  const from = jest.fn()
  from.mockResolvedValueOnce(1000)
  expect(getBalance("Han", from)).resolves.toEqual({
    name: "Han",
    balance: 1000
  })
  expect(from.mock.calls.length).toBe(1)
  await expect(from.mock.results[0].value).resolves.toBe(1000)
})

test.failing("mock async function failing", async () => {
  const from = jest.fn()
  from.mockRejectedValueOnce(new error("Ups"))
  await getBalance("Han", from)
})