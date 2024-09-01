import https from "https";

const endpoint = "https://ensuftxdhwnfe.x.pipedream.net";
const req = https.request(
  endpoint,
  {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  },
  (res) => {
    res.on("data", (data) => {
      console.log(`Received data: ${data.toString()}`);
    });
  }
);

const body = JSON.stringify({
  message: "Hello from Node.js",
});

req.write(body);
req.end();
