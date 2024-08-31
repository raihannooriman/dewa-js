const sayHi = (name) => {
  debugger; // debugger ini akan berhenti di line ini
  return `Hi ${name}`;
};
const name = "Raihan";
debugger; // debugger ini akan berhenti di line ini
console.log(sayHi(name));

// jalankan dengan perintah node inspect nodejs/6debugger.js bukan node nodejs/6debugger.js
