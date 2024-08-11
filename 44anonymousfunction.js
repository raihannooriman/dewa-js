// dimasukkan ke variabel
let say = function (name) {
  console.log(name);
};
say("John");
// Output: John

// dimasukkan ke parameter
function giveMeName(callback) {
  callback("John");
}
giveMeName(say);
// Output: John
giveMeName(function (name) {
  console.log(name);
});
// Output: John
