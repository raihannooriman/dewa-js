import util from "util";

console.log(util.format("Nama: %s", "Han"));
const person = {
  firstName: "Han",
  lastName: "Man",
};
console.log(util.format("Person: %s", person));
