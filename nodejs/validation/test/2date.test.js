import Joi from "joi"

describe("Joi", () => {
  it("should can validate date", () => {
    const birthdateSchema = Joi.date().required().max("now").min("1-1-1999")

    const result = birthdateSchema.validate("1-1-1997")
    console.log(result)
    console.log(typeof result.value)
    console.log(typeof result.error)
    const result2 = birthdateSchema.validate("1-1-2000")
    console.log(result2)
    console.log(typeof result2.value)
    console.log(typeof result2.error)
    const result3 = birthdateSchema.validate("1-1-2026")
    console.log(result3)
    console.log(typeof result3.value)
    console.log(typeof result3.error)
  })
})