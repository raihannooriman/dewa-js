beforeAll(() => console.log("before All Outer"))
afterAll(() => console.log("after All Outer"))
beforeEach(() => console.log("before Each Outer"))
afterEach(() => console.log("after Each Outer"))

test("test outer",()=> console.log("test outer"))

describe("Inner", () => {
  beforeEach(() => console.log("before Each Inner"))
  afterEach(() => console.log("after Each Inner"))
  test("test inner", () => console.log("test inner"))
})