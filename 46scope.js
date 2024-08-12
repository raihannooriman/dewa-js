// global scope
let counter = 0;

function hitMe() {
  //local scope hitMe
  counter++;
}
function clickeMe() {
  //local scope clickeMe
}
hitMe();
hitMe();
console.log(counter);
// output: 2

function first() {
  let firstVariable = "First";
  // local scope first
  function firstNested() {
    // local scope firstNested
    console.log(firstVariable);
    // output: First
  }
  firstNested();
}
function second() {
  // local scope second
  let secondVariable = "Second";
  console.log(firstVariable);
  // output: error variable tidak bisa diakses karena berada di beda scope
}

first();
second();
console.log(firstVariable);
console.log(secondVariable);
// output:error variable tidak bisa diakses karena berada di local scope
