import express from 'express';
import mustacheExpress from 'mustache-express';
import request from 'supertest';

const app = express();

app.set("views", __dirname + "/views")
app.set("view engine", "html")
app.engine("html", mustacheExpress())

app.get("/", (req, res) => {
  res.render("index", { 
    title: "Hello",
    say: "Hello Response"
  })
})

test("test response ", async () => {
  const response = await request(app).get("/");
  console.log(response.text);
  expect(response.text).toContain("Hello");
  expect(response.text).toContain("Hello Response");
})