import express from 'express';
import request from 'supertest';

const app = express();

app.get("/hello/world", (req, res) => {
  res.send(`Hello ${req.query.firstName} ${req.query.lastName}`)
})

test("test request query", async () => {
  const response = await request(app).get("/hello/world").query({firstName: "Han", lastName: "Iman"});
  expect(response.text).toBe("Hello Han Iman");
})