import cookieParser from 'cookie-parser';
import express from 'express';
import request from 'supertest';

const app = express();
app.use(cookieParser("RAHASIA123"))
app.use(express.json());

app.get("/", (req, res) => {
  const name = req.signedCookies["Login"]
  res.send(`Hello ${name}`);
})

app.post(`/login`, (req, res) => {
  const name = req.body.name;
  res.cookie("Login", name, { path: "/", signed: true });
  res.send(`Hello ${name}`);
})

test("test cookie read", async () => {
  const response = await request(app).get("/")
  .set("Cookie", "Login=s%3AHan.VLd6qURoIlPfQQagKF3O%2BzUgmzLJzUuARG96d7LPyXw; Path=/");
  expect(response.text).toBe("Hello Han");
})

test("test cookie write", async () => {
  const response = await request(app).post("/login")
    .send({ name: "Han" });
  console.log(response.get("Set-Cookie"))
  expect(response.get("Set-Cookie").toString()).toContain("Han")
  expect(response.text).toBe("Hello Han");
})