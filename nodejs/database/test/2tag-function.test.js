const tagFunction = (array, ...args) => {
  console.log(array);
  console.log(args);
}

test("tag function", () => {
  const name = "Han"
  const lastName = "Man"
  tagFunction`Hello ${name}! ${lastName}, How are you?`
  tagFunction`Bye ${name}! ${lastName}`
})

test("tag function sql", () => {
  const name = "Han"
  const age = 23
  tagFunction `SELECT * FROM users WHERE name = ${name} AND age = ${age}`
})