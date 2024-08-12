const createAdder = (value) => {
  const owner = "Han";
  const add = (param) => {
    console.log(owner);
    return value + param;
  };
  return add;
};

const addTwo = createAdder(2);
// console.log(owner); // error
console.log(addTwo(5));
// output: 7
console.log(addTwo(10));
// output: 12
const addTen = createAdder(10);
console.log(addTen(2));
// output: 12
console.log(addTen(10));
// output: 20
