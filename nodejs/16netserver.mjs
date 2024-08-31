import net from "net";

const server = net.createServer((client) => {
  console.log("Client connected");
  client.on("data", (data) => {
    console.log(`Data received from client: ${data.toString()}`);
    client.write(`Halo: ${data.toString()}\r\n`);
  });
});

server.listen(3000, "localhost");
