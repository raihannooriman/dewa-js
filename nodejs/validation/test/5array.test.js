import Joi from "joi";

describe("Joi", () => {
  it("should can validate array", () => {
    const hobbySchema = Joi.array().items(
      Joi.string().required().min(3).max(100)
    ).min(1).unique()

    const hobbies = ["A", "Reading", "Coding"]
    const result = hobbySchema.validate(hobbies, {
      abortEarly: false
    })
    console.log(result)
  })

  // untuk validasi array yg di dalamnya adalah object

  it("should can validate array of object", () => {
    const addressesSchema = Joi.array().items(Joi.object({
      street: Joi.string().required().min(3).max(100),
      city: Joi.string().required().min(3).max(100),
      country: Joi.string().required().min(3).max(100),
      zipCode: Joi.string().required().min(3).max(100)
    }))
    const addresses = [
      {
        street: "jalan belum dapat"
      }
    ]
    const result = addressesSchema.validate(addresses, {
      abortEarly: false
    })
    console.log(result)
  })
})