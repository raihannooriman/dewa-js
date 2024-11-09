import express from 'express';
import request from 'supertest';

const logger = (req, res, next) => { 
  console.log(`Received request: ${req.method} ${req.originalUrl}`);
  next();
}

const addPoweredHeader = (req, res, next) => {
  res.set("X-Powered-By", "Express");
  next();
}

const apiKeyMiddleware = (req, res, next) => {
  req.query.apiKey ? next() : res.status(401).end()
}

const requestTimeMiddleware = (req, res, next) => {
  req.requestTime = Date.now();
  next();
}

const app = express();
app.use(logger);
app.use(apiKeyMiddleware);
app.use(addPoweredHeader);
app.use(requestTimeMiddleware);

app.get("/", (req, res) => {
  res.send("Hello Response");
})

app.get("/han", (req, res) => {
  res.send("Hello Han");
})

app.get("/time", (req, res) => {
  res.send(`Request received at ${req.requestTime}`);
})

test("test response Middleware", async () => {
  const response = await request(app).get("/").query({apiKey: "123"});
  expect(response.get("X-Powered-By")).toBe("Express");
  expect(response.text).toBe("Hello Response");
})

test("test response Middleware 2", async () => {
  const response = await request(app).get("/han").query({apiKey: "123"});
  expect(response.get("X-Powered-By")).toBe("Express");
  expect(response.text).toBe("Hello Han");
})

test("test response Middleware unauthorized", async () => {
  const response = await request(app).get("/han");
  expect(response.status).toBe(401);
})

test("test response Middleware Time", async () => {
  const response = await request(app).get("/time").query({apiKey: "123"});
  expect(response.get("X-Powered-By")).toBe("Express");
  expect(response.text).toContain("Request received at");
})