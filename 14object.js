// object kosong
const objectKosong = {};
console.log(objectKosong);
// output: {}

const objectName = {
  "atribut 1": 1, // properti dengan spasi, tidak disarankan. Lebih baik tanpa spasi seperti atribut1
  atribut2: "dua",
  atribut3: true,
};
console.table(objectName);
// output: { atribut1: 1, atribut2: 'dua', atribut3: true }

// menambahkan properti dan value ke object
const person = {
  "name lengkap": "John Doe",
  age: 30,
  isMarried: false,
};

// versi lain menambahkan properti ke object
// person.name = "John Doe";
// person.age = 30;
// person.isMarried = false;

console.table(person);
// output: { name: 'John Doe', age: 30, isMarried: false }

// delete properti object
delete person.age;
console.table(person);
// output: { name: 'John Doe', isMarried: false }

// mengakses properti object
console.log(`Nama: ${person["name lengkap"]}`); // versi untuk properti dengan spasi
console.log(`isMaried: ${person.isMarried}`); // versi untuk properti tanpa spasi
