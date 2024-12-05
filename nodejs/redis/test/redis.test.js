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
})