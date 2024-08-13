function Person() {
  this.firstName = ""; //property, this keyword mengacu pada object yang dibuat
  this.lastName = "";
}
const han = new Person();
han.firstName = "Han";
han.lastName = "Solo";
const iman = new Person();
iman.firstName = "Iman";
iman.lastName = "Nur";
console.log(han);
console.log(iman);
