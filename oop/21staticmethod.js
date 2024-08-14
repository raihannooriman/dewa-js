class ClassName {
  static methodName() {
    console.log("static method");
  }
}

const variable1 = new ClassName();
console.log(variable1);
// output: ClassName {}

// cara mengakses method static
ClassName.methodName();
// output: static method
