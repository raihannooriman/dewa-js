function Employee(name) {
  this.name = name;
}
function Manager(name) {
  this.name = name;
}
Manager.prototype = Object.create(Employee.prototype);

Manager.prototype.sayHello = function (name) {
  console.log(`Hello ${name}, my name is Manager ${this.name}`);
};
Employee.prototype.sayHello = function (name) {
  console.log(`Hello ${name}, my name is Employee ${this.name}`);
};
const employee = new Employee("Han");
employee.sayHello("Iman");
const manager = new Manager("Solo");
manager.sayHello("Nur");

console.log(employee);
console.log(manager);
