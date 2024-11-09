import cookieParser from 'cookie-parser';
import express from 'express';
import request from 'supertest';

const app = express();
app.use(cookieParser())
app.use(express.json());

app.get("/", (req, res) => {
  const name = req.cookies["name"];  
  res.send(`Hello ${name}`);
})

app.post(`/login`, (req, res) => {
  const name = req.body.name;
  res.cookie("Login", name, { path: "/" });
  res.send(`Hello ${name}`);
})

test("test cookie read", async () => {
  const response = await request(app).get("/")
  .set("Cookie", "name=Han; age=20");
  expect(response.text).toBe("Hello Han");
})

test("test cookie write", async () => {
  const response = await request(app).post("/login")
    .send({ name: "Han" });
  expect(response.get("Set-Cookie").toString()).toBe("Login=Han; Path=/");
  expect(response.text).toBe("Hello Han");
})