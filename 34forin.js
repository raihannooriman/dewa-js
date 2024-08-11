let person = {
  firstName: "John",
  lastName: "Doe",
};

for (const property in person) {
  console.log(`${property}: ${person[property]}`);
}
// output: firstName: John
//         lastName: Doe
// jelaskan kode diatas
// - for in digunakan untuk mengiterasi property dari object
// - property adalah nama variable yang digunakan untuk menyimpan nama property
// - person[property] digunakan untuk mengambil value dari property
// - output yang dihasilkan adalah property: value
