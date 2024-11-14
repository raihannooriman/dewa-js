import Mustache from "mustache";
import fs from "fs/promises";

test("Menggunakan Mustache", () => {
  const data = Mustache.render("Hello, {{name}}", { name: "Han" });
  expect(data).toBe("Hello, Han");
})

test("Menggunakan Mustache Cache", () => {
  Mustache.parse("Hello, {{name}}");
  const data = Mustache.render("Hello, {{name}}", { name: "Han" });
  expect(data).toBe("Hello, Han");
})

test("Tags", () => {
  const data = Mustache.render("Hello, {{name}}, my hobby is {{{hobby}}}", { name: "Han", hobby: "<b>Programming</b>" });
  expect(data).toBe("Hello, Han, my hobby is <b>Programming</b>");
})

test("Nested Object", () => {
  const data = Mustache.render("Hello, {{person.name}}", { person: { name: "Han" } });
  expect(data).toBe("Hello, Han");
})

test("Mustache File", async () => {
  const helloTempelate = await fs.readFile("./tempelates/hello.mustache").then(data => data.toString());
  const data = Mustache.render(helloTempelate, { title: "Mustache" });
  console.log(data);
  expect(data).toContain("Mustache");
})

test("Mustache Section Not Show", async () => {
  const helloTempelate = await fs.readFile("./tempelates/person.mustache").then(data => data.toString());
  const data = Mustache.render(helloTempelate, {});
  console.log(data);
  expect(data).not.toContain("Hello Person");
})

test("Mustache Section Show", async () => {
  const helloTempelate = await fs.readFile("./tempelates/person.mustache").then(data => data.toString());
  const data = Mustache.render(helloTempelate, {
    person: {
      name: "Han"
    }
  });
  console.log(data);
  expect(data).toContain("Hello Person");
})

test("Section Data", async () => {
  const helloTempelate = await fs.readFile("./tempelates/person.mustache").then(data => data.toString());
  const data = Mustache.render(helloTempelate, {
    person: {
      name: "Han"
    }
  });
  console.log(data);
  expect(data).toContain("Hello Person Han!");
})

test("Inverted Section", async () => {
  const helloTempelate = await fs.readFile("./tempelates/person.mustache").then(data => data.toString());
  const data = Mustache.render(helloTempelate, {});
  console.log(data);
  expect(data).toContain("Hello Guest");
})

test("List", async () => {
  const helloTempelate = await fs.readFile("./tempelates/hobbies.mustache").then(data => data.toString());
  const data = Mustache.render(helloTempelate, {
    hobbies: [
      "Programming",
      "Gaming",
      "Reading"
    ]
  });
  console.log(data);
  expect(data).toContain("Programming");
  expect(data).toContain("Gaming");
  expect(data).toContain("Reading");
})