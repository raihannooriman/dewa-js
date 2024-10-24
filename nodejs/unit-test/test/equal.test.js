test("test toBe", () => {
  let name = "Han";
  let hello = `Hello ${name}`;
  expect(hello).toBe("Hello Han");
})
test("test toEqual", () => {
  let person = { id: "han" };
  Object.assign(person, { name: "Han" });
  expect(person).toEqual({ id: "han", name: "Han" });
})