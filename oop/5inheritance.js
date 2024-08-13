function Employee(firstName) {
  this.firstName = firstName;
  this.sayHello = function (name) {
    console.log(`Hello ${name}, my name is ${this.firstName}`);
  };
}
function Manager(firstName, lastName) {
  this.lastName = lastName;
  Employee.call(this, firstName); // inheritance dari Employee
}
const han = new Manager("Han", "Solo");
console.log(han);
