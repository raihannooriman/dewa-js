// console.log(this);
// // output: {} atau window di browser

// function sample() {
//   console.log(this);
//   // output: {}
//   function inner() {
//     console.log(this);
//     // output: {}
//   }
//   inner();
// }
// sample();

const person = {
  name: "Mosh",
  sayHello: function (value) {
    console.log(`Hello ${value} my name is ${this.name}`);
  },
};
person.sayHello("Han");
// output: Hello Han my name is Mosh
// output: { name: 'Mosh', sayHello: [Function: sayHello] }
