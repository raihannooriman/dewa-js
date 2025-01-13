// for (;;) {
//   alert("This will run forever");
// }

//let hitung diluar for loop
// let hitung = 1;
// for (; hitung <= 10; ) {
//   console.log("Perulangan ke-" + hitung);
//   hitung++;
// }

// let hitung dimasukkan ke dalam for loop
// for (let hitung = 1; hitung <= 10; ) {
//   console.log("Perulangan ke-" + hitung);
//   hitung++;
// }

// let hitung dimasukkan ke dalam for loop dan hitung++ masuk ke dalam for loop
for (let hitung = 1; hitung <= 10; hitung++) {
  console.log("Perulangan ke-" + hitung);
}

let jumlahBaris = 5;
let kursiPerBaris = 4;
let totalKursi = 0;

// Menggunakan for loop
for (let i = 1; i <= jumlahBaris; i++) {
    totalKursi += kursiPerBaris; // Menambahkan jumlah kursi di setiap baris
    console.log(`Baris ${i}: Total kursi sekarang = ${totalKursi}`);
}

console.log(`Total seluruh kursi di kelas: ${totalKursi}`);
// output: Baris 1: Total kursi sekarang = 4, Baris 2: Total kursi sekarang = 8, Baris 3: Total kursi sekarang = 12, Baris 4: Total kursi sekarang = 16, Baris 5: Total kursi sekarang = 20, Total seluruh kursi di kelas: 20
