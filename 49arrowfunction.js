// arrow function
const nameFunction = (parameter) => {
  const result = `Hello ${parameter}`;
  console.log(result);
};
nameFunction("World");
// output: Hello World

// oneline arrow function
const oneLine = (params) => console.log(`Hello ${params}`);
oneLine("World");
// output: Hello World

//with return
// return tidak perlu ditulis karena otomatis return
const sum = (x, y) => console.log(x + y);
sum(200, 300);
// output: 500

// satu parameter (harusnya bisa tanpa kurung)
const hi = (name) => console.log(`Hi ${name}`);
hi("Guys");
// output: Hi Guys

//arrow function sebagai parameter
const giveMeName = (callback) => callback("John");
giveMeName((nama) => console.log(`Hello ${nama}`));
// output: Hello John
