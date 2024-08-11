let person = {
  firstName: "John",
  lastName: "Doe",
};
// // tanpa with statement kita harus menulis person berkali-kali
// console.log(person.firstName);
// console.log(person.lastName);
with (person) {
  console.log(firstName);
  console.log(lastName);
}
// tidak direkomendasikan digunakan karena akan membuat kode menjadi sulit dibaca dan sulit di debug
