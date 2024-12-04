import { prismaClient } from "../src/prisma-client"

describe("Prisma Client", () => {
  // it("should can insert and include", async () => {
  //   const comment = await prismaClient.comment.create({
  //     data: {
  //       customer_id: "han",
  //       title: "insert comment",
  //       description: "insert comment description"
  //     },
  //     include: {
  //       customer: true
  //     }
  //   })
  //   console.log(comment)
  // })
  // it("should can insert and many relation", async () => {
  //   const customer = await prismaClient.customer.create({
  //     data: {
  //       id: "prabowo",
  //       name: "Prabowo",
  //       email: "prabowo@mail.com",
  //       phone: "696969696969",
  //       comments: {
  //         createMany: {
  //           data: [
  //             {
  //               title: "comment 1",
  //               description: "comment 1 description"
  //             },
  //             {
  //               title: "comment 2",
  //               description: "comment 2 description"
  //             }
  //           ]
  //         }
  //       }
  //     },
  //     include: {
  //       comments: true
  //     }
  //   })
  //   console.log(customer)
  // })
  it("should can find many with many relation", async () => {
    const customers = await prismaClient.customer.findMany({
      where: {
        comments: {
          some: {
            title: {
              contains: "comment"
            }
          }
        }
      },
      include: {
        comments: true
      }
    })
    console.log(customers)
  })
})