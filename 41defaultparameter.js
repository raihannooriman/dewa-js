function register(name, gender = "unknown") {
  console.log(name);
  console.log(gender);
}
register();
// Output: undefined unknown(nilai default)
register("Raihan");
register("Male");
register("Raihan", "Male");
