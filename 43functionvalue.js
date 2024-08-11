// fungsi sebagai value
function hello(name) {
  console.log(name);
}
let say = hello;
say("John");
// Output: John

// fungsi sebagai parameter
function giveMeName(callback) {
  callback("John"); //say("John")
}
giveMeName(say);
// Output: John
