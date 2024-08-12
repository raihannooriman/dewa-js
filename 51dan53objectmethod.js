// membuat object dengan  method
const person = {
  name: "Mosh",
  // ini adalah function
  sayHello: function (name) {
    console.log("Hello, " + name);
  },
};
person.sayHello("Han");
// output: Hello, Han

// versi arrow function dari method object
const person2 = {
  name: "Mosh",
  sayHello: (name) => {
    console.log("Hello, " + name);
  },
};
person2.sayHello("Han");

// menambahkan method ke object
const person3 = {
  name: "Han",
};
person3.sayHellp = function (name) {
  console.log("Hello, " + name);
};
person3.sayHellp("Mosh");
//output: Hello, Mosh
