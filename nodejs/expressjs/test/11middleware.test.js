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

const app = express();
app.use(logger);
app.use(addPoweredHeader);

app.get("/", (req, res) => {
  res.send("Hello Response");
})


app.get("/han", (req, res) => {
  res.send("Hello Han");
})

const apiKeyMiddleware = (req, res, next) => {
  req.query.api_key ? next() : res.status(401).end()
}

test("test response Middleware", async () => {
  const response = await request(app).get("/");
  expect(response.get("X-Powered-By")).toBe("Express");
  expect(response.text).toBe("Hello Response");
})

test("test response Middleware", async () => {
  const response = await request(app).get("/han");
  expect(response.get("X-Powered-By")).toBe("Express");
  expect(response.text).toBe("Hello Han");
})