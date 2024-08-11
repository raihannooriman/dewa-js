// Rest Parameter
function sum(name, ...data) {
  let total = 0;
  for (const item of data) {
    total += item;
  }
  console.log(`Total data ${name} is ${total}`);
}
sum("orange", 1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
// Output: Total data orange is 55
// yg dijumlahkan adalah 1+2+3+4+5+6+7+8+9+10 = 55
// ...data akan mengambil semua data yang diinputkan ke dalam function sum.
// ...data akan mengubah data menjadi array. Kemudian kita bisa melakukan perulangan menggunakan for...of untuk menjumlahkan semua data yang ada di dalam array.

//spread syntax
// Spread syntax adalah cara untuk memecah iterables menjadi single element.
// Spread syntax ditandai dengan tiga titik (...). Spread syntax bisa digunakan untuk memecah array, object, dan string.
// untuk yang terlanjur dengan array
const values = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
sum("apple", ...values);
// Output: Total data apple is 55
