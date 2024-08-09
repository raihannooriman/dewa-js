//if
let value = true;
if (value) {
  console.log("true");
}
// output: true

let x = 50;
// if (x > 60) {
//   console.log("lulus");
// } //bentuk aslinya
if (x > 60) console.log("lulus"); // bisa tanpa kurung kurawal

// tidak ada output

//else
let value2 = false;
if (value2) {
  console.log("true");
} else {
  console.log("false");
}
// output: false

let y = 50;
// if (y > 60) {
//   console.log("lulus");
// } else {
//   console.log("gagal");
// } //bentuk aslinya
if (y > 60) console.log("lulus");
else console.log("gagal"); // bisa tanpa kurung kurawal dengan syarat sebelum else harus ada titik koma dan else harus diawali dengan spasi
// output: gagal

//else if
let value3 = 50;
// if (value3 > 70) {
//   console.log("nilai A");
// } else if (value3 > 60) {
//   console.log("nilai B");
// } else {
//   console.log("nilai C");
// } //bentuk aslinya
// apakah bisa tanpa kurung kurawal? bisa
// caranya
if (value3 > 70) console.log("nilai A");
else if (value3 > 60) console.log("nilai B");
else console.log("nilai C");
// output: nilai B
// tanpa else apakah bisa? bisa
// caranya
// if (value3 > 70) console.log("nilai A");
// if (value3 > 60) console.log("nilai B");
// if (value3 < 60) console.log("nilai C");
// output: nilai B
// yang mana yang disarankan? yang pertama yaitu dengan else if karena lebih efisien dan lebih mudah dibaca
