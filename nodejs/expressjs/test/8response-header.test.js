import express from 'express';
import request from 'supertest';

const app = express();

app.get("/", (req, res) => {
  res.set({
    "X-Powered-By": "Express",
    "X-Author": "Han",
  })
  res.send("Hello Response");
})

test("test response header ", async () => {
  const response = await request(app).get("/");
  expect(response.text).toBe("Hello Response");
  expect(response.get("X-Powered-By")).toBe("Express");
  expect(response.get("X-Author")).toBe("Han");
})