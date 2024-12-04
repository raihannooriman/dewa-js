import { prismaClient } from "../src/prisma-client"

describe("Prisma Client", () => {
  //insert without relation
  // it("should can create one to one relation", async () => {
  //   const wallet = await prismaClient.wallet.create({
  //     data: {
  //       id: "han",
  //       customer_id: "han",
  //       balance: 1000000
  //     },
  //     include: {
  //       customer: true
  //     }
  //   })
  //   console.log(wallet)
  // })

  //insert with relation
  it("should can create one to one relation", async () => {
    const customer = await prismaClient.customer.create({
      data: {
        id: "joko",
        name: "Joko",
        email: "joko@mail.com",
        phone: "98765432",
        wallet: {
          create: {
            id: "joko",
            balance: 1000000
          }
        }
      },
      include: {
        wallet: true
      }
    })
    console.log(customer)
  })
})