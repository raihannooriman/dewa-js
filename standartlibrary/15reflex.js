const person = {};

Reflect.set(person, "name", "John");
Reflect.set(person, "age", 20);

console.log(Reflect.get(person, "name")); // output: John
console.log(Reflect.get(person, "age")); // output: 20

console.log(Reflect.has(person, "name")); // output: true
console.log(Reflect.has(person, "age")); // output: true
console.log(Reflect.has(person, "job")); // output: false
