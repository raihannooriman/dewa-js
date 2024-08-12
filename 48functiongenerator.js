function* createNames() {
  yield "John";
  yield "Paul";
  yield "George";
}
const names = createNames();
for (const name of names) {
  console.log(name);
}
// output: John Paul George

function* odd(n) {
  for (let i = 0; i <= n; i++) {
    if (i % 2 === 1) {
      console.log(`yield ${i}`); //lazy evaluation: yaitu nilai i akan dihasilkan ketika fungsi next() dipanggil
      yield i;
    }
  }
}
const numbers = odd(100);
// for (const number of numbers) {
//   console.log(number);
// }
// output: 1 3 5 7 9 11 13 15 17 19 21 23 25 27 29 31 33 35 37 39 41 43 45 47 49 51 53 55 57 59 61 63 65 67 69 71 73 75 77 79 81 83 85 87 89 91 93 95 97 99
