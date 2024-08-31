import { EventEmitter } from "events";
const emmiter = new EventEmitter();
emmiter.addListener("Hello", (name) => {
  console.log(`Hello ${name}`);
});
emmiter.addListener("Hello", (name) => {
  console.log(`Halo ${name}`);
});
emmiter.emit("Hello", "Han");
