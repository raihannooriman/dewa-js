import process from "process";
import readline from "readline";

const input = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

input.question("Siapa nama kamu? ", (nama) => {
  console.log(`Halo ${nama}`);
  input.close();
});

// input dilakukan di terminal