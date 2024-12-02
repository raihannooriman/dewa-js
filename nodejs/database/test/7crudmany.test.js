import { prismaClient } from "../src/prisma-client"

describe("Prisma Client", () => {
  // Create
  // it("should can create many records", async () => {
  //   const { count } = await prismaClient.customer.createMany({
  //     data: [
  //       {
  //         id: "leo",
  //         email: "leo@mail.com",
  //         phone: "628123456789062",
  //         name: "Leo"
  //       },
  //       {
  //         id: "tez",
  //         email: "tez@mail.com",
  //         phone: "62812345678901222",
  //         name: "Tez"
  //       }
  //     ]
  //   })
  //   expect(count).toBe(2)
  // })

  // Update
  // it("should can update many records", async () => {
  //   const { count } = await prismaClient.customer.updateMany({
  //     data: {
  //       email: "mailupdatex@mail.com"
  //     },
  //     where: {
  //       name: "Tez"
  //     }
  //   })
  //   expect(count).toBe(1)
  // })

  // Delete
  // it("should can delete many records", async () => {
  //   const { count } = await prismaClient.customer.deleteMany({
  //     where: {
  //       name: "none"
  //     }
  //   })
  //   expect(count).toBe(0)
  // })
  
  // Read
  it("should can read many recoesa", async () => {
    const customers = await prismaClient.customer.findMany({})
    console.log(customers)
    expect(customers.length).toBe(8)
  })
})