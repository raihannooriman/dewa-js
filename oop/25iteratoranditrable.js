// membuat class counter iterator result
class CounterInteratorResult {
  constructor(value, done) {
    this.value = value;
    this.done = done;
  }
}

// membuar class counter iterator
class CounterInterator {
  constructor(value, max) {
    this.value = value;
    this.max = max;
  }
  // membuat kontrak next
  next() {
    try {
      if (this.value > this.max) {
        // jika melebihi batas maksimal, maka done true
        return new CounterInteratorResult(this.value, true);
      } else {
        // jika masih dalam batas maksimal, maka done false
        return new CounterInteratorResult(this.value, false);
      }
    } finally {
      // menaikkan this.value
      this.value++;
    }
  }
}

// membuat class counter
class Counter {
  constructor(value, max) {
    this.value = value;
    this.max = max;
  }
  // membuat kontrak iterator
  [Symbol.iterator]() {
    return new CounterInterator(this.value, this.max);
  }
}

const counter = new Counter(1, 20);
for (const value of counter) {
  console.log(value);
}
// output: 1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20
