import express from 'express';
import request from 'supertest';

const app = express();
const errorMiddleware = (err, req, res, next) => {
  res.status(500).send(`Terjadi Error: ${err.message}`);
}

app.get("/", (req, res) => {
  throw new Error("Cannot read property 'name' of undefined");
})
app.use(errorMiddleware);

test("test response ", async () => {
  const response = await request(app).get("/");
  expect(response.status).toBe(500);
  expect(response.text).toBe("Terjadi Error: Cannot read property 'name' of undefined");
})