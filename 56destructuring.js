//array destructuring
let name = [
  "Raihan",
  "Nooriman",
  "Hanif",
  "Prabowo",
  "Joko",
  "Anies",
  "Ganjar",
];

// cara biasa tanpa destructuring
// const firstName = name[0];
// const lastName = name[1];
// console.log(firstName);
// console.log(lastName);

// dengan destructuring
const [firstName, lastName, ...others] = name;
console.log(firstName);
console.log(lastName);
console.log(others);
// output: Raihan, Nooriman, [ 'Hanif', 'Prabowo', 'Joko', 'Anies', 'Ganjar' ]

//object destructuring
let person = {
  firstNama: "Raihan",
  lastNama: "Nooriman",
  address: {
    street: "PIK",
    city: "Jakarta",
    country: "Indonesia",
  },
  hobby: ["coding", "reading", "swimming"],
};

// //cara biasa tanpa destructuring
// const firstNama = person.firstName;
// const lastNama = person.lastName;
// const street = person.address.street;
// const city = person.address.city;
// const country = person.address.country;
// const hobby1 = person.hobby[0];
// console.log(firstName);

// dengan destructuring
const {
  firstNama,
  lastNama,
  address: { country, city, street },
  ...lainnya
} = person;
console.log(firstNama);
console.log(lastNama);
console.log(country);
console.log(city);
console.log(street);
console.log(lainnya);

//destructuring function parameter

// object
function printPerson({ firstNama, lastNama, address: { city } }) {
  console.log(`Hello, ${firstNama} ${lastNama} from ${city}`);
}
const person2 = {
  firstNama: "Raihan",
  lastNama: "Nooriman",
  address: {
    city: "Jakarta",
  },
};
printPerson(person2);
// output: Hello, Raihan Nooriman from Jakarta

// array
function printHobbies([hobby1, hobby2]) {
  console.log(`Hobbies: ${hobby1}, ${hobby2}`);
}
const hobbies = ["coding", "reading"];
printHobbies(hobbies);
// output: Hobbies: coding, reading

//destructuring default value untuk array tidak ada data
const data = ["data1", "data2"];
const [x, y, z = "datadefault"] = data;
console.log(x);
console.log(y);
console.log(z);
// output: data1, data2, datadefault

//destructuring default value untuk object tidak ada data
const person3 = {
  namaDepan: "Raihan",
  namaBelakang: "Nooriman",
};
const { namaDepan, namaBelakang, alamat = "Jakarta" } = person3;
console.log(namaDepan);
console.log(namaBelakang);
console.log(alamat);
// output: Raihan, Nooriman, Jakarta

// menggunakan nama variabel yang lain (alias) pada destructuring object
const { namaDepan: namaMuka, namaBelakang: namaKlan } = person3;
console.log(namaMuka);
console.log(namaKlan);
// output: Raihan, Nooriman
