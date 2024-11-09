import express from 'express';
import request from 'supertest';

const app = express();

const router = express.Router();
router.use((req, res, nest) => {
  console.log(`Received Request: ${req.originalUrl}`);
  nest();
})
router.get(`/feature/a`, (req, res) => {
  res.send("Feature A");
})

test("test Router Disabled", async () => {
  let response = await request(app).get("/feature/a");
  expect(response.status).toBe(404);
})

test("test Router Enabled", async () => {
  app.use(router)
  let response = await request(app).get("/feature/a");
  expect(response.text).toBe("Feature A");
})