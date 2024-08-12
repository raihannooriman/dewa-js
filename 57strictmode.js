function useStrictMode() {
  // "use strict";
  const person = {
    firstNama: "Raihan",
  };
  with (person) {
    console.log(firstNama);
  }
}
// fitur strict mode akan membuat kode lebih ketat dan lebih aman dari bug yang sulit diidentifikasi
// firue ini default di typeScript
