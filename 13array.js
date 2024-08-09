// array kosong
let emptyArray = [];
console.table(emptyArray);
// array dengan isi
let nameArray = ["Raihan", "Noor", "Iman"];
console.table(nameArray);

const array = [];
array.push(1);
array.push(2);
array.push(3);
console.table(array);

// menampilkan panjang array
console.log(array.length);
// output: 3

// mengakses data/value array pada index tertentu
console.log(array[0]);
// output: 1

// mengubah data/value array pada index tertentu
array[0] = 10;
console.table(array);
// output: [ 10, 2, 3 ]

// menghapus data/value array pada index tertentu
// index array tidak bergeser
delete array[1];
console.table(array);
// output: [ 10, <1 empty item>, 3 ]
// isi ke-1 array dengan 20
array[1] = 20;
console.table(array);
// output: [ 10, 20, 3 ]
