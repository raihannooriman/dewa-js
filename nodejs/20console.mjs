import { Console } from "console";
import fs from "fs";

const file = fs.createWriteStream("application.log");

const log = new console.Console({
  stdout: file,
  stderr: file,
});

log.log("Hello world");
log.error("Error occurred");
log.warn("Warning");

const isi = {
  first: "First",
  second: "Second",
};
log.table(isi);
