import Joi from "joi";

describe("Joi", () => {
  it("should can validate object", () => {
    const loginSchema = Joi.object({
      username: Joi.string().required().min(3).max(100).email(),
      password: Joi.string().required().min(8).max(100)
    })
    const request = {
      username: "han@mail.com",
      password: "han1111111"
    }
    const result = loginSchema.validate(request, {
      abortEarly: false
    })
    console.log(result)
  })

  // validasi kompleks

  it("should can validate nested object", () => {
    const createUserSchema = Joi.object({
      id: Joi.number().required().max(100),
      name: Joi.string().required().min(3).max(100),
      address: Joi.object({
        street: Joi.string().required().min(3).max(100),
        city: Joi.string().required().min(3).max(100),
        country: Joi.string().required().min(3).max(100),
        zipCode: Joi.string().required().min(3).max(100)
      }).required()
    })
    const request = {
      address : {

      }
    }
    const result = createUserSchema.validate(request, {
      abortEarly: false
    })
    console.log(result)
    if (result.error) {
      result.error.details.forEach(value => {
        console.log(`${value.path}: ${value.message}`)
      })
    }
  })
})