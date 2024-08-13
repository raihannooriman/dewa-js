function Person() {
  this.firstName = "";
  this.lastName = "";
  this.sayHello = function (name) {
    console.log(`Hello ${name}, my name is ${this.firstName}`); //method sayHello dengan parameter name
  };
}
const han = new Person();
han.firstName = "Han";
han.lastName = "Solo";
han.sayHello("Han");
// output: Hello Han, my name is Han
const iman = new Person();
iman.firstName = "Iman";
iman.lastName = "Nur";
iman.sayHello("Iman");
// output: Hello Iman, my name is Iman
console.log(han);
console.log(iman);
