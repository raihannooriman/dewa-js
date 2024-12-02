import { prismaClient } from "../src/prisma-client"

// describe("Prisma Client", () => {
//   it("should can create and select fields", async () => {
//     const customer = await prismaClient.customer.create({
//       data: {
//         id: "jokowi",
//         email: "jokowi@mail.com",
//         phone: "081234567890",
//         name: "Jokowi"
//       },
//       select: {
//         id: true,
//         name: true
//       }
//     })
//     expect(customer.id).toBe("jokowi")
//     expect(customer.name).toBe("Jokowi")
//     expect(customer.email).toBeUndefined()
//     expect(customer.phone).toBeUndefined()
//   })

// untuk many
describe("Prisma Client", () => {
  it("should can select fields", async () => {
    const customer = await prismaClient.customer.findMany({
      select: {
        id: true,
        name: true
      }
    })
    for (let customer of customer) {
      expect(customer.id).toBeDefined()
    expect(customer.name).toBeDefined()
    expect(customer.email).toBeUndefined()
    expect(customer.phone).toBeUndefined()
    }
  })
})