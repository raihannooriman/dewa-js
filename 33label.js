loopi: for (let i = 0; i < 10; i++) {
  loopij: for (let j = 1; j <= 100; j++) {
    if (j > 10) {
      continue loopi;
    }
    console.log(`${i} - ${j}`);
  }
}
// output: i - j
// jelaskan kode diatas
// label digunakan untuk memberikan nama pada loop
// - loop pertama akan berjalan sebanyak 10 kali
// - loop kedua akan berjalan sebanyak 100 kali
// - jika j lebih dari 10, maka loop pertama akan di skip
// - jika j kurang dari sama dengan 10, maka akan di print i dan j
// - output yang dihasilkan adalah i - j
// label jarang digunakan, karena akan membuat kode menjadi sulit dibaca
// lebih baik menggunakan function untuk menghindari penggunaan label
