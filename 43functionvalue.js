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

function namaFunction(callback) {
  callback("value");
}

namaFunction(function (value) {
  console.log(value);
});
// Output: value