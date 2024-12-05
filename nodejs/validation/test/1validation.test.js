import Joi from "joi"

describe("joi", () => {
  // 1
  it("should can create schema", () => {
    const schema = Joi.string().min(3).max(100).required()
    const result = schema.validate("o")
    if(result.error) {
      console.log(result.error)
    }
  })
  // 2
  it("should can validate basic type data", () => {
    const usernameSchema = Joi.string().email().required()
    const isAdminSchema = Joi.boolean().required()
    const priceSchema = Joi.number().required().min(1000).max(1000000)

    const resultUsername = usernameSchema.validate("han@mail.com")
    console.log(resultUsername)
    const resultIsAdmin = isAdminSchema.validate(true)
    console.log(resultIsAdmin)
    const resultPrice = priceSchema.validate(100000)
    console.log(resultPrice)
  })
})