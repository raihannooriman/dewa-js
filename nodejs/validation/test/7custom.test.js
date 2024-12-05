import Joi from "joi";
describe("Joi", () => {
  it("should can create custom validation", () => {
    const registerSchema = Joi.object({
      username: Joi.string().required().min(3).max(100).email(),
      password: Joi.string().required().min(8).max(100),
      confirmPassword: Joi.string().required().min(8).max(100).custom((value, helpers) => {
        if (value.startsWith("han")) {
          return helpers.error("password.wrong")
        }
        return value
      }).messages({
        "password.wrong": "Password tidak boleh diawali dengan han"
      })
    }).custom((value, helpers) => {
      if (value.password !== value.confirmPassword) {
        return helpers.error("any.invalid")
      }
      return value
    }).messages({
      "register.password.different":"Password and Confirm Password is not same"
    })
    const request = {
      username: "han@mail.com",
      password: "dadadasas",
      confirmPassword: "dadadasas"
    }
    const result = registerSchema.validate(request, {
      abortEarly: false
    })
    console.log(result)
  })
})