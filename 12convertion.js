// menunjukkan hasil dari operasi penjumlahan antara string dan number
const x = "1";
const y = 2;
const sum = x + y;
console.log(sum);
// Output: 12
// JavaScript akan mengkonversi number ke string ketika kita melakukan operasi penjumlahan antara string dan number.

// Jika kita ingin mengkonversi string ke number, kita bisa menggunakan parseInt() atau parseFloat().
const a = parseInt("1");
const b = 2;
const c = x + y;
console.log(c);
// Output: 3
// parseInt() akan mengkonversi string ke number dengan menghilangkan karakter yang bukan angka.
// Jika kita ingin mengkonversi string ke number dengan mengambil karakter angka saja, kita bisa menggunakan parseFloat().
console.log(`${parseInt("1.5")}`);
// dibaca 1
console.log(`${parseFloat("1.5")}`);
// dibaca 1.5
console.log(`${Number("1.5")}`);
// dibaca 1.5

const d = 3;
const e = 4;
const total = d.toString() + e.toString();
console.log(total);
// Output: 34
// toString() akan mengkonversi number ke string.

// NaN: Not a Number, hasil dari operasi matematika yang tidak valid.
console.log(parseInt("Halo"));
// Output: NaN
console.log(parseFloat("100.1han"));
// Output: 100.1
console.log(Number("100.1han"));
// Output: NaN

// Jika kita melakukan operasi matematika dengan NaN, hasilnya akan selalu NaN.
console.log(NaN + 5);
// Output: NaN
console.log(isNaN(first));
// Output: true
console.log(isNaN(100));
// Output: false
console.log(isNaN("100"));
// Output: false
console.log(isNaN("Halo"));
// Output: true
console.log(isNaN("100.1han"));
// Output: true
