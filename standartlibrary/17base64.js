const original = "teks ini telah di encoded, rahasia";

const encoded = btoa(original);
console.log(encoded); // "string acak tapi tetap sama bisa di decoded sendiri"

const decoded = atob(encoded);
console.log(decoded); // "teks ini telah di encoded, rahasia"
