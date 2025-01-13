const person = {
  address: {
    country: "USA",
  },
};
// akses benar
let state = person.address.country;
console.log(state); // USA
// akses salah tanpa operator chaining (?.)
let state2 = person.phone.home;
console.log(state2); // Error: Cannot read property 'home' of undefined
// akses salah dengan operator chaining (?.)
let state3 = person.phone?.home;
console.log(state3); // undefined
//penjelasan:
// operator chaining (?.) digunakan untuk mengakses properti dari sebuah object secara aman
// jika properti yang diakses tidak ditemukan, maka hasilnya akan undefined dan tidak akan menimbulkan error seperti contoh state2

