const person = {
  address: {
    country: "USA",
  },
};
let state = person?.address?.country;
console.log(state); // USA
//penjelasan:
//operator chaining (?.) digunakan untuk memeriksa apakah properti dari objek yang diakses ada atau tidak.
//Jika properti yang diakses tidak ada, maka hasilnya adalah undefined.
//Dalam contoh di atas, properti address dan country ada, sehingga state akan berisi "USA".
//Jika properti address tidak ada, maka state akan berisi undefined.
// jika tanpa operator chaining (?.) maka akan terjadi error. karena properti address tidak ada
