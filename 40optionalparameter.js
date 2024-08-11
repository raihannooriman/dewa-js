function hello(firstName, middleName, lastName) {
  console.log(firstName);
  console.log(middleName);
  console.log(lastName);
}
hello();
// Output: undefined undefined undefined
hello("Raihan");
// Output: Raihan undefined undefined
hello("Raihan", "Noor");
// Output: Raihan Noor undefined
hello("Raihan", "Noor", "Iman");
// Output: Raihan Noor Iman
hello("Raihan", "Noor", "Iman", "Raihan");
// Output: Raihan Noor Iman.
//Raihan sebagai argumen keempat tidak diassign ke dalam parameter apapun
// penjelasan
// Pada contoh di atas, fungsi hello memiliki tiga parameter firstName, middleName, dan lastName. Ketika fungsi tersebut dipanggil tanpa argumen, maka ketiga parameter tersebut akan memiliki nilai undefined. Ketika fungsi dipanggil dengan satu argumen, maka argumen tersebut akan diassign ke parameter firstName, sedangkan parameter middleName dan lastName akan memiliki nilai undefined. Begitu seterusnya.
