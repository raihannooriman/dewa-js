class ClassName {
  constructor(parameter) {
    this.property = parameter;
  }
  methodName(parameter) {
    // method pada class ClassName dengan parameter "parameter" dan menggunakan property "property" pada class ClassName
    console.log(`Ini ${parameter}, dan ini ${this.property} ClassName.`);
  }
}
const variableName = new ClassName("value");
console.log(variableName);
// output: ClassName { property: 'value' }
console.log(variableName.property);
// output: value karena property "property" pada class ClassName diisi dengan "value"
variableName.methodName("parameter");
// output: Ini parameter, dan ini value ClassName.
