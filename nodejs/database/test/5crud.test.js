import { prismaClient } from "../src/prisma-client"

describe("Prisma Client", () => 
{
  
  // create

  // it("should be able to create customer", async () => {
  //   const customer = await prismaClient.customer.create({
  //     data: {
  //       id: "han",
  //       email: "han@mail.com",
  //       name: "Han",
  //       phone: "6281234567890"
  //     }
  //   })
  //   expect(customer.id).toBe("han")
  //   expect(customer.email).toBe("han@mail.com")
  //   expect(customer.name).toBe("Han")
  //   expect(customer.phone).toBe("6281234567890")
  // })

  // update

  // it("should be able to update customer", async () => {
  //   const customer = await prismaClient.customer.update({
  //     data: {
  //       name: "Han Iman",
  //     },
  //     where: {
  //       id: "han"
  //     }
  //   })
  //   expect(customer.id).toBe("han")
  //   expect(customer.email).toBe("han@mail.com")
  //   expect(customer.name).toBe("Han Iman")
  //   expect(customer.phone).toBe("6281234567890")
  // })

  // read/find

  // it("should be able to create customer", async () => {
  //   const customer = await prismaClient.customer.findUnique({
  //     where: {
  //       id: "han"
  //     }
  //   })
  //   expect(customer.id).toBe("han")
  //   expect(customer.email).toBe("han@mail.com")
  //   expect(customer.name).toBe("Han Iman")
  //   expect(customer.phone).toBe("6281234567890")
  // })

  // delete

  it("should be able to create customer", async () => {
    const customer = await prismaClient.customer.delete({
      where: {
        id: "han"
      }
    })
    expect(customer.id).toBe("han")
    expect(customer.email).toBe("han@mail.com")
    expect(customer.name).toBe("Han Iman")
    expect(customer.phone).toBe("6281234567890")
  })
})