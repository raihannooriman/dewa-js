let hitung = 1;
while (hitung <= 10) {
  console.log("Perulangan ke-" + hitung);
  hitung++;
}
// output: Perulangan ke-1-10

let lampu = "merah";

// Menggunakan while loop
while (lampu !== "hijau") { 
    console.log(`Lampu masih ${lampu}, tunggu...`);
    
    // Simulasi perubahan warna lampu (contoh saja)
    if (lampu === "merah") {
        lampu = "kuning"; // Lampu berubah
    } else if (lampu === "kuning") {
        lampu = "hijau"; // Lampu berubah
    }
}

console.log("Lampu hijau! Silakan jalan.");
// output: Lampu masih merah, tunggu... Lampu masih kuning, tunggu... Lampu hijau! Silakan jalan.