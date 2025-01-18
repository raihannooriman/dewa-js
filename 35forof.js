let names = ["John", "Doe"];
for (const name of names) {
  console.log(name);
}
// output: John, Doe
let fullname = "John Doe";
for (const character of fullname) {
  console.log(character);
}
// output: J o h n   D o e
// mengapa jadi terpisah per karakter? karena string di javascript adalah array of character (array of string) jika diakses per karakter tanpa index, jika diakses per kata maka harus menggunakan index array.