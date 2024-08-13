// Mendefinisikan objek 'person' dengan properti 'firstName' dan 'lastName'
// serta getter dan setter untuk 'fullName'
const person = {
  firstName: "Raihan", // Properti 'firstName' dengan nilai awal
  lastName: "Nooriman", // Properti 'lastName' dengan nilai awal
  // Getter untuk 'fullName'
  get fullName() {
    // Menggabungkan 'firstName' dan 'lastName' dengan spasi di antara mereka
    return `${this.firstName} ${this.lastName}`;
  },
  // Setter untuk 'fullName'
  set fullName(value) {
    // Memisahkan string 'value' menjadi array berdasarkan spasi
    const array = value.split(" ");
    // Mengubah nilai 'firstName' menjadi elemen pertama array
    this.firstName = array[0];
    // Mengubah nilai 'lastName' menjadi elemen kedua array
    this.lastName = array[1];
  },
};

// Mengubah nilai 'fullName' menjadi "Joko Widodo"
// Setter akan dipanggil dan memecah string menjadi ["Joko", "Widodo"]
// Menetapkan 'firstName' menjadi "Joko" dan 'lastName' menjadi "Widodo"
person.fullName = "Joko Widodo";
console.table(person);
person.fullName = "Raihan Nooriman";
console.table(person);
person.fullName = "Anies Baswedan";
console.table(person);
