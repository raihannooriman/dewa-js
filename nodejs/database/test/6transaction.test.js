import { prismaClient } from "../src/prisma-client"

describe("Prisma Client", () => {
  // it("should can execute sequence transaction", async () => {
  //   const [han, han2] = await prismaClient.$transaction([
  //     prismaClient.customer.create({
  //       data: {
  //         id: "han",
  //         email: "han@email.com",
  //         name: "Han",
  //         phone: "6281234567890"
  //       }
  //     }),
  //     prismaClient.customer.create({
  //       data: {
  //         id: "han2",
  //         email: "han2@mail.com",
  //         name: "Han2",
  //         phone: "6281234567891"
  //       }
  //     })
  //   ])
  //   expect(han.name).toBe("Han")
  //   expect(han2.name).toBe("Han2")
  // })

  it("should can execute interactive transaction", async () => {
    const [han, han2] = await prismaClient.$transaction(async (prisma) => {
      const han = await prisma.customer.create({
        data: {
          id: "han1x",
          email: "han1x@email.com",
          name: "Han",
          phone: "628123456789012"
        }
      })
      const han2 = await prisma.customer.create({
        data: {
          id: "han2xx",
          email: "han2xx@mail.com",
          name: "Han2",
          phone: "628123456789123"
        }
      })
      return [han, han2]
    }, {
      // untuk option
      timeout: 5000
    })
    expect(han.name).toBe("Han")
    expect(han2.name).toBe("Han2")
  })
})