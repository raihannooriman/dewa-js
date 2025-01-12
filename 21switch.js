let value = "B";
switch (value) {
  case "A":
    console.log("A");
    break;
  case "B":
    console.log("B");
  case "C":
    console.log("BC");
    break;
  default:
    console.log("default");
}
// output: B, BC (tidak ada break pada case "B")
// penjelasan
// value = "C" maka akan mengeksekusi case "C" dan break, sehingga outputnya adalah "C"
// break digunakan untuk menghentikan eksekusi kode dalam switch case
// jika tidak ada break, maka kode akan terus dieksekusi sampai menemukan break atau akhir dari switch case
