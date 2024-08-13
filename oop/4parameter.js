function Person(firstName, lastName) {
  // parameter firstName dan lastName pada constructor function
  this.firstName = firstName;
  this.lastName = lastName;
  this.sayHello = function (name) {
    console.log(`Hello ${name}, my name is ${this.firstName}`); //method sayHello dengan parameter name
  };
}
const han = new Person("Han", "Solo"); // object han dengan parameter firstName dan lastName
han.sayHello("Han");
// output: Hello Han, my name is Han
const iman = new Person("Iman", "Nur");
iman.sayHello("Iman");
// output: Hello Iman, my name is Iman
console.log(han);
console.log(iman);
