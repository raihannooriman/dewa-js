import http from "http";

const server = http.createServer((req, res) => {
  console.log(req.method);
  console.log(req.url);
  if (req.method === "POST") {
    let body = "";
    req.on("data", (chunk) => {
      body += chunk;
    });

    req.on("end", () => {
      res.setHeader("Content-Type", "application/json");
      res.end(body);
    });
  } else {
    const responseText =
      req.url === "/han"
        ? "Hello han from HTTP Server"
        : "Hello from HTTP Server";
    res.setHeader("Content-Type", "text/plain");
    res.end(responseText);
  }
});
server.listen(3000, () => {
  console.log("Server is listening on port 3000");
});
