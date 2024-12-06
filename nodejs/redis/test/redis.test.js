import Redis from "ioredis";

describe("nodejs redis", () => {
  let redis = null;
  beforeEach(async () => {
    redis = new Redis({
      host: "localhost",
      port: 6379,
      db: 0
    })
  })
  afterEach(async () => {
    await redis.quit();
  })

  //test command ping PONG
  // it("should can ping", async () => {
  //   const pong = await redis.ping();
  //   expect(pong).toBe("PONG");
  // })

  // // support string
  // it("should support string", async () => {
  //   await redis.setex("name", 2, "Han")
  //   let name = await redis.get("name");
  //   expect(name).toBe("Han");


  //   await new Promise(resolve => setTimeout(resolve, 3000))
  //   name = await redis.get("name");
  //   expect(name).toBeNull();
  // })

  // // support list
  // it("should support list data type", async () => {
  //   await redis.rpush("names", "Han");
  //   await redis.rpush("names", "Noor");
  //   await redis.rpush("names", "Iman");

  //   expect(await redis.llen("names")).toBe(3);
  //   const names = await redis.lrange("names", 0, -1);
  //   expect(names).toEqual(["Han", "Noor", "Iman"]);

  //   expect(await redis.lpop("names")).toBe("Han");
  //   expect(await redis.rpop("names")).toBe("Iman");
  //   expect(await redis.llen("names")).toBe(1);

  //   await redis.del("names");
  // })

  // support set
  // it("should support set data type", async () => {
  //   await redis.sadd("names", "Han");
  //   await redis.sadd("names", "Han");
  //   await redis.sadd("names", "Noor");
  //   await redis.sadd("names", "Noor");
  //   await redis.sadd("names", "Iman");
  //   await redis.sadd("names", "Iman");
  //   expect(await redis.scard("names")).toBe(3);

  //   const names = await redis.smembers("names");
  //   expect(names).toEqual(["Han", "Noor", "Iman"]);

  //   await redis.del("names");
  // })

  // support sorted set
  // it("should support sorted set data type", async () => {
  //   await redis.zadd("names", 1, "Han");
  //   await redis.zadd("names", 2, "Noor");
  //   await redis.zadd("names", 3, "Iman");

  //   expect(await redis.zcard("names")).toBe(3);

  //   const names = await redis.zrange("names", 0, -1);
  //   expect(names).toEqual(["Han", "Noor", "Iman"]);

  //   expect(await redis.zpopmax("names")).toEqual(["Iman", "3"]);
  //   expect(await redis.zpopmax("names")).toEqual(["Noor", "2"]);
  //   expect(await redis.zpopmax("names")).toEqual(["Han", "1"]);
  // });

  // // support hash
  // it("should support hash data type", async () => {
  //   await redis.hset("user:1", {
  //     "id": "1",
  //     "name": "Han",
  //     "email":"han@mail.com"
  //   })
  //   const user = await redis.hgetall("user:1")

  //   expect(user).toEqual({
  //     "id": "1",
  //     "name": "Han",
  //     "email":"han@mail.com"
  //   })
  //   await redis.del("user:1")
  // })

  // support geo point
  // it("should support geo point data type", async () => {
  //   await redis.geoadd("base",  106.91277120816868,-6.333708567337694, "Base A")
  //   await redis.geoadd("base",  106.82417890653775, -6.171419666295594, "Base B")

  //   const distance = await redis.geodist("base", "Base A", "Base B", "km")
  //   expect(distance).toBe(String(20.5374))
  // })

  // support hyper log log
  it("should support hyper log log data type", async () => {
    await redis.pfadd("visitors", "han", "noor", "iman")
    await redis.pfadd("visitors", "han", "joko", "wowo")
    await redis.pfadd("visitors", "wowo", "anis", "harto")
    const total = await redis.pfcount("visitors")
    expect(total).toBe(7)
  })

  // support pipeline
  it("should support pipeline", async () => {
    const pipeline = redis.pipeline();
    pipeline.setex("name", 2, "Han");
    pipeline.setex("address", 2, "Jakarta");
    await pipeline.exec();
    expect(await redis.get("name")).toBe("Han");
    expect(await redis.get("address")).toBe("Jakarta");
  })

  // support transaction
  it("should support transaction", async () => {
    const transaction = redis.multi();
    transaction.setex("name", 2, "Han");
    transaction.setex("address", 2, "Jakarta");
    await transaction.exec();
    expect(await redis.get("name")).toBe("Han");
    expect(await redis.get("address")).toBe("Jakarta");
  })

  // support stream
  // it("should support stream", async () => {
  //   for (let i = 0; i < 10; i++){
  //     await redis.xadd("members","*","name", `Han ${i}`, "address", "Jakarta")
  //   }
  // })
  // it("should support consumer group stream", async () => {
  //   await redis.xgroup("CREATE", "members", "group-1", "0")
  //   await redis.xgroup("CREATECONSUMER", "members", "group-1", "consumer-1")
  //   await redis.xgroup("CREATECONSUMER", "members", "group-1", "consumer-2")
  // })
  // it("should can consume stream", async () => {
  //   const result = await redis.xreadgroup("GROUP", "group-1", "consumer-1", "COUNT", 2, "BLOCK", 3000, "STREAMS", "members", ">")
  //   expect(result).not.toBeNull()
  //   console.log(JSON.stringify(result, null, 2))
  // })

  // support pub/sub

  // jalankan test ini terlebih dahulu

  // it("should can subscribe to pubsub", async () => {
  //   redis.subscribe("channel-1")
  //   redis.on("message", (channel, message) => {
  //     console.log(`Receive message from ${channel} with message ${message}`)
  //   })
  //   // wait 60 detik
  //   await new Promise(resolve => setTimeout(resolve, 60000))
  // }, 60000)

  // jalankan test ini setelah test diatas dijalankan
  it("should can publish to pubsub", async () => {
    for (let i = 0; i < 10; i++){
      redis.publish("channel-1", `Hello world ${i}`)
    }
  })
})