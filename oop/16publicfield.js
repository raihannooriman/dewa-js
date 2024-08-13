class ClassName {
  // public field bisa diakses dari luar class
  publicField1;
  publicField2;
  publicField3 = 0;
  // constructor untuk public field
  constructor(publicField1, publicField2) {
    this.publicField1 = publicField1;
    this.publicField2 = publicField2;
  }
}
const variable = new ClassName("field1", "field2");
console.log(variable);
// Output: ClassName { publicField1: undefined, publicField2: undefined, publicField3: 0 }
