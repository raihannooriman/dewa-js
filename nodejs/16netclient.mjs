import net from "net";

const client = net.createConnection(3000, "localhost");

client.addListener("data", (data) => {
  console.log(`Received data from server: ${data.toString()}`);
});

setInterval(() => {
  client.write(`${process.argv[2]}\r\n`);
}, 2000);
