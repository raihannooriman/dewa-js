class ClassName {
  static field1 = "value1";
  static field2 = "value2";
  // static membuat field menjadi milik class bukan object
}

const variable1 = new ClassName();
console.log(variable1);
// output: ClassName {}

// cara mengakses field static
console.log(ClassName.field1);
console.log(ClassName.field2);
// output: value1
