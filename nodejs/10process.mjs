import process, { exitCode } from "process"; // walaupu global, tapi perlu diimport

process.addListener("exit", (exitCode) => {
  console.log(`NodeJS process exit dengan kode: ${exitCode}`);
});
// process.exit(0); // exit dengan kode 0

console.log(process.version);
// versi nodejs
console.table(process.argv);
// argument yang dijalankan
console.table(process.report);
// informasi report
console.table(process.env);
// informasi environment variable yang digunakan

process.exit(1); // exit dengan kode 0

console.log("Tidak akan tampil");
