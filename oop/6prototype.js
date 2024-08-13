function Person(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.sayHello = function (name) {
    console.log(`Hello ${name}, my name is ${this.firstName}`);
  };
}
Person.prototype.sayBye = function () {
  console.log("Good Bye");
};
Person.prototype.run = function () {
  console.log(`${this.firstName} is running`);
};
const han = new Person("Han", "Solo");
const iman = new Person("Iman", "Nur");
console.log(han);
console.log(iman);
