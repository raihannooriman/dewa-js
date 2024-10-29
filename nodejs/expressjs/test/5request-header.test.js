import express from 'express';
import request from 'supertest';

const app = express();

app.get("/", (req, res) => {
  const type = req.get("accept");
  res.send(`Hello ${type}`)
})

test("test querry parameter", async () => {
  const response = await request(app).get("/")
  .set("accept", "application/json")
  expect(response.text).toBe("Hello application/json");
})