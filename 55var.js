// global scope
var i = 20;

for (let i = 0; i < 10; i++) {
  // local scope
  console.log(`Local ${i}`);
}
console.log(`Global ${i}`);
