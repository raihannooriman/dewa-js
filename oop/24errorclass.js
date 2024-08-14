class ValidationError extends Error {
  constructor(message, field) {
    super(message);
    this.field = field;
  }
}

class MathUtil {
  static sum(...numbers) {
    if (numbers.length === 0) {
      // manual untuk menambahkan informasi field pada error
      throw new ValidationError("Error, total parameter harus > 0", "numbers");
    }
    let total = 0;
    for (const number of numbers) {
      total += number;
    }
    return total;
  }
}
try {
  console.log(MathUtil.sum());
  console.log("Tidak terjadi error");
} catch (error) {
  // informasi tambahan field pada error
  if (error instanceof ValidationError) {
    console.log(`Terjadi error: ${error.message} pada field: ${error.field}`);
  }
} finally {
  console.log("finally, program selesai");
}
console.log("lanjut program");
