{
  // array loop atau perulangan array
  const array = ["value1", "value2", "value3"];
  array.forEach((value, index) => {
    console.log(`${index}: ${value}`);
  });
  // output: 0: value1 1: value2 2: value3
}
{
  // array queue atau antrian
  const queue = [];
  queue.push("queue1"); // menambah data queue ke 1
  queue.push("queue2"); // menambah data queue ke 2
  queue.push("queue3"); // menambah data queue ke 3
  console.log(queue.shift()); // queue1 mengambil data queue ke 1
  console.log(queue.shift()); // queue2 mengambil data queue ke 2
  console.log(queue.shift()); // queue3 mengambil data queue ke 3
  console.log(queue.shift()); // undefined karena sudah habis queuenya
}
{
  // array stack atau tumpukan
  const stack = [];
  stack.push("stack1"); // menambah data stack ke 1
  stack.push("stack2"); // menambah data stack ke 2
  stack.push("stack3"); // menambah data stack ke 3
  console.log(stack.pop()); // stack3 mengambil data stack ke 3
  console.log(stack.pop()); // stack2 mengambil data stack ke 2
  console.log(stack.pop()); // stack1 mengambil data stack ke 1
  console.log(stack.pop()); // undefined karena sudah habis stacknya
}
{
  // array search atau pencarian
  const source = [1, 2, 3, 4, 5, 1, 2, 3, 4, 5];
  console.log(source.find((value) => value > 3)); // 4, untuk mencari data pertama yang lebih dari 3 dari kiri ke kanan (index 3) adalah 4
  console.log(source.findIndex((value) => value > 3)); // 3 untuk mencari index data pertama yang lebih dari 3 dari kiri ke kanan adalah index 3
  console.log(source.includes(7)); // false karena tidak ada data 7
  console.log(source.indexOf(5)); // 4 karena data 5 pertama kali ditemukan pada index 4
  console.log(source.lastIndexOf(5)); // 9 karena data 5 terakhir kali ditemukan pada index 9
}
{
  // array filter atau penyaringan
  const number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  console.log(number.filter((value) => value % 2 === 0)); // [2, 4, 6, 8, 10] karena hanya angka genap (% 2 === 0) yang diambil
  console.log(number.filter((value) => value % 2 === 1)); // [1, 3, 5, 7, 9] karena hanya angka ganjil (% 2 === 1) yang diambil
}
{
  //array transformation atau transformasi
  const names = ["Raihan", "Nooriman"];

  const namesUpper = names.map((name) => name.toUpperCase());
  console.log(namesUpper); // [RAIHAN, NOORIMAN] untuk mengubah semua huruf menjadi huruf besar

  const nameReduce = names.reduce((before, value) => before + " " + value);
  console.log(nameReduce); // Raihan Nooriman untuk menggabungkan semua data

  const nameRight = names.reduceRight((before, value) => before + " " + value);
  console.log(nameRight); // Nooriman Raihan untuk menggabungkan semua data dari kanan (kebalikan dari reduce)

  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const total = numbers.reduce((before, value) => before + value);
  console.log(total); // 55 untuk menjumlahkan semua data
}
