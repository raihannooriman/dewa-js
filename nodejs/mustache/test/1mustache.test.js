import Mustache from "mustache";

test("Menggunakan Mustache", () => {
  const data = Mustache.render("Hello, {{name}}", { name: "Han" });
  expect(data).toBe("Hello, Han");
})