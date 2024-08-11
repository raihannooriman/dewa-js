//falsy
console.log("Hello" || "");
// output: Hello karena "Hello" adalah truthy value
console.log("" || []);
// output: [] karena "" adalah falsy value
console.log("Hello" || []);
// output: Hello karena "Hello" adalah truthy value, tapi sama-sama truthy value maka yang diambil adalah value pertama
console.log(null || "Hello");
// output: Hello karena null adalah falsy value
console.log([] || "Hello");
// output: [] karena [] adalah truthy value
console.log(false || undefined);
// output: undefined karena false adalah falsy value dan undefined adalah falsy value, maka yang diambil adalah value kedua

// truthy
console.log("Hello" && "");
// output: "" karena "" adalah falsy value
console.log("" && []);
// output: "" karena "" adalah falsy value
console.log("Hello" && []);
// output: [] karena [] adalah truthy value dan "Hello" adalah truthy value, maka yang diambil adalah value kedua
console.log(null && "Hello");
// output: null karena null adalah falsy value
console.log([] && "Hello");
// output: "Hello" karena [] adalah truthy value dan "Hello" adalah truthy value, maka yang diambil adalah value kedua
console.log(false && undefined);
// output: false karena false adalah falsy value dan undefined adalah falsy value, maka yang diambil adalah value pertama
