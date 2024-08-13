class ClassName {
  methodPublicName(parameter) {
    if (parameter) {
      this.#methodPrivateName2(parameter);
    } else {
      this.#methodPrivateName();
    }
  }
  #methodPrivateName() {
    console.log("Hello World");
  }
  #methodPrivateName2(parameter) {
    console.log(`Hello ${parameter}`);
  }
}
const variable = new ClassName();
variable.methodPublicName("Value");
//variable.#methodPrivateName();
// tidak bisa diakses dari luar class karena private
