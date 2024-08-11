function outer() {
  function inner() {
    console.log("I am inner function");
  }
  inner();
  inner();
}
outer();
// output: I am inner function
// inner(); tidak bisa diakses
