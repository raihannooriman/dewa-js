test("string.not", () => {
  const name = "Si Nooriman";
  expect(name).not.toBe("Raihan");
  expect(name).not.toEqual("Raihan");
  expect(name).not.toMatch(/ihan/);
})
test("numbers.not", () => {
  const value = 2 + 2;
  expect(value).not.toBeGreaterThan(6);
  expect(value).not.toBeLessThan(2);
  expect(value).not.toBe(10);
})