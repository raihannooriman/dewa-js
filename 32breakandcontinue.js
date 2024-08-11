// // break
// let hitung = 1;
// while (true) {
//   console.log("Perulangan ke-" + hitung);
//   hitung++;
//   if (hitung > 10) {
//     break;
//   }
// }
// break menghentikan perulangan ketika kondisi terpenuhi (hitung > 10) dan keluar dari perulangan
// output: Perulangan ke-1-10

// continue
for (let i = 1; i <= 100; i++) {
  if (i % 2 == 0) {
    continue;
  }
  console.log("Perulangan ke-" + i);
}
// output: Perulangan ke-1-99 (angka ganjil)
// continue menghentikan perulangan ketika kondisi terpenuhi (i % 2 == 0) dan melanjutkan ke perulangan berikutnya
