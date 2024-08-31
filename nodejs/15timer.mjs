import timers from "timers/promises";

// setInterval(() => {
//   console.log(`Start time at ${new Date()}`);
// });
// versi callback

// console.log(new Date());
// const wait = await timers.setTimeout(5000, "Sudah 5 detik");
// console.log(new Date());
// console.log(wait);
// versi promise

for await (let startTime of timers.setInterval(1000, "ignored")) {
  console.log(`Start time at ${new Date()}`);
}
