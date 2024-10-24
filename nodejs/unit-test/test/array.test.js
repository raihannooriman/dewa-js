test("array", () => {
  const names = ["Raihan", "Nooriman"];
  expect(names).toContain("Nooriman");
  expect(names).toEqual(["Raihan", "Nooriman"]);
})
test("array object", () => {
  const persons = [{ name: "Raihan" }, { name: "Nooriman" }];
  expect(persons).toContainEqual({ name: "Nooriman" });
  expect(persons).toEqual([{ name: "Raihan" }, { name: "Nooriman" }]);
})