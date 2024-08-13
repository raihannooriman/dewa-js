class ClassName {
  #privateField = 0;
  decrement() {
    this.#privateField--;
  }
  increment() {
    this.#privateField++;
  }
  get() {
    return this;
  }
}
const variable = new ClassName();
variable.increment();
variable.increment();
variable.increment();
variable.increment();
variable.increment();
variable.increment();
console.log(variable.get());
variable.privateField = 100;
// Output: ClassName { #privateField: 6 }

//variable.#privateField = 100;
// Output: SyntaxError: Private field '#privateField' must be declared in an enclosing class
// private field tidak bisa diakses dari luar class
