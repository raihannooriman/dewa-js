// factiorial function
// function factorial(n) {
//   let result = 1;
//   for (let i = 1; i <= n; i++) {
//     result *= i;
//   }
//   return result;
// }

function factiorialRecursive(n) {
  if (n === 1) {
    return 1;
  } else {
    return n * factiorialRecursive(n - 1);
  }
}
console.log(factorial(5));
// output: 120
