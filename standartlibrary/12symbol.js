// const variable1 = Symbol("variable1");
// const variable2 = Symbol("variable2");

// const simbol = {};
// simbol[variable1] = "value1";
// simbol[variable2] = "value2";

// tanpa harus menulis variable1 dan variable2
const simbol = {};
simbol[Symbol.for("variable1")] = "value1";
simbol[Symbol.for("variable2")] = "value2";

console.log(Symbol.for("variable1") === Symbol.for("variable1")); // output: true
console.log(simbol); // output: { [Symbol()]: 'value1', [Symbol()]: 'value2' }
console.log(simbol[Symbol.for("variable1")]); // output: value1
console.log(simbol[Symbol.for("variable2")]); // output: value2
