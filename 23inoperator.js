let person = {
  firstName: "John",
  lastName: "Doe",
};
// if ("firstName" in person) console.log(person.firstName);
const inResult = "firstName" in person;
console.log(inResult);
// output: true
