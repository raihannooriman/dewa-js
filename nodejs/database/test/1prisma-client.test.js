import { PrismaClient } from "@prisma/client";

describe("PrismaClient", () => {
  it("should be able to connect to database", async () => {
    const prisma = new PrismaClient();
    prisma.$connect()
    // do something with the prisma client
    await prisma.$disconnect()
  })
})