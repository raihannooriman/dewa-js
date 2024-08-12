// getter untuk mengambil nilai dari properti objek
const person = {
  firstName: "Raihan",
  lastName: "Nooriman",
  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  },
  // setter untuk mengubah nilai dari properti objek
  set fullName(value) {
    const array = value.split(" ");
    this.firstName = array[0];
    this.lastName = array[1];
  },
};
person.fullName = "Joko Widodo";
console.table(person);
person.fullName = "Raihan Nooriman";
console.table(person);
person.fullName = "Anies Baswedan";
console.table(person);
