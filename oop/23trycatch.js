class MathUtil {
  static sum(...numbers) {
    if (numbers.length === 0) {
      throw new Error("Error, total parameter harus > 0");
    }
    let total = 0;
    for (const number of numbers) {
      total += number;
    }
    return total;
  }
}
try {
  // jika tidak terjadi error, yang dijalankan yang ada di blok try ini
  console.log(MathUtil.sum());
  console.log("Tidak terjadi error");
} catch (error) {
  // jika error, yang dijalankan yang ada di blok catch ini
  console.log(error.message);
} finally {
  // selalu dijalankan, terjadi error atau tidak
  console.log("finally, program selesai");
}
console.log("lanjut program");
