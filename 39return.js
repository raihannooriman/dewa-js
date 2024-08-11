// membuat function dengan parameter dan return value

// membuat function hello dengan parameter firstName dan lastName
function hello(firsiName, lastName) {
  // kemudian membuat variable say yang berisi string Hello firstName lastName untuk menampilkan hasil dari parameter yang diinputkan ke dalam function hello tersebut
  const say = `Hello ${firsiName} ${lastName}`;
  // kemudian mengembalikan nilai dari variable say untuk menampilkan hasil dari parameter yang diinputkan ke dalam function hello tersebut
  return say;
}

// kemudian membuat variable result yang berisi function hello dengan parameter John dan Doe untuk menampilkan hasil dari parameter yang diinputkan ke dalam function hello tersebut
const result = hello("John", "Doe");
// kemudian menampilkan variable result
console.log(result);

function getFinalValue(value) {
  if (value > 90) {
    return "A";
  } else if (value > 80) {
    return "B";
  } else if (value > 70) {
    return "C";
  } else if (value > 60) {
    return "D";
  } else {
    return "E";
  }
}

const finalValue = getFinalValue(75);
console.log(finalValue);
// output: C

function isContains(array, searchValue) {
  for (const element of array) {
    console.log(element);
    if (element === searchValue) {
      return true;
    }
  }
  return false;
}
const array = [1, 32, 4324, 3, 43, 53, 53, 43, 43, 535, 35, 5];
const search = 43;
const found = isContains(array, search);
console.log(found);
// output: true

function buatJus(buah) {
  return `Jus ${buah}`; // mengembalikan hasil jus buah
  // tanpa return, fungsi hanya akan melakukan proses tanpa mengembalikan nilai yang bisa digunakan di luar fungsi itu sendiri
  //misalnya blender hanya mencampur buah tanpa memberikan hasil jus yang bisa digunakan di luar fungsi itu sendiri
}
let hasilJus = buatJus("mangga");
console.log(hasilJus);
// output: Jus mangga

// function namaFungsi(parameter1, parameter2, ..., parameterN) {
//   // Kode yang akan dijalankan oleh fungsi
//   // Bisa melakukan operasi atau tugas tertentu

//   // Mengembalikan hasil atau nilai dari fungsi
//   return nilaiYangDikembalikan;
// }

// // Contoh penggunaan fungsi
// let hasil = namaFungsi(argumen1, argumen2, ..., argumenN);
// console.log(hasil);
