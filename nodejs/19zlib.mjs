import fs from "fs";
import zlib from "zlib";

const source = fs.readFileSync("19zlib.mjs"); // baca file
const result = zlib.gzipSync(source); // kompresi file

console.log(result); // hasil kompresi
fs.writeFileSync("19zlib.mjs.txt", result); // tulis file hasil kompresi

//decompress
const source2 = fs.readFileSync("19zlib.mjs.txt"); // baca file hasil kompresi
const result2 = zlib.gunzipSync(source2); // dekompresi file

console.log(result2.toString()); // hasil dekompresi
