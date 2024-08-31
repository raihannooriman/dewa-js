const promise = () => {
  return Promise.resolve("Promise resolved");
};
const solved = await promise();
console.log(solved);
// Output: Promise resolved
// pada module defaultnya sudah async, sehingga tidak perlu menggunakan async function lagi
