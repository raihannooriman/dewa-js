import fs from "fs/promises";

const buffer = await fs.readFile("5filesystem.mjs");
console.log(buffer.toString());

fs.writeFile("temp.txt", "ditulis oleh nodejs");
