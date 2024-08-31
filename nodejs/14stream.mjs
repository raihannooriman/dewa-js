import fs from "fs";

const writer = fs.createWriteStream("target.log");

writer.write("Stream\n");
writer.write("Write\n");
writer.write("NodeJS\n");

writer.end(); // akhiri stream

const reader = fs.createReadStream("target.log");
reader.addListener("data", (data) => {
  console.log(data.toString());
});
// untuk membaca
