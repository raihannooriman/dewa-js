import { callMe, MyException } from "../src/exception"

test("exception", () => {
  expect(() => callMe("Raihan")).toThrow();
  expect(() => callMe("Raihan")).toThrow(MyException);
  expect(() => callMe("Raihan")).toThrow("Ups my exception happened");
})
test("exception not happens", () => {
  expect(callMe("who")).toBe("Ok")
})