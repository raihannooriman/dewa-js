class ClassName {
  constructor(parameter1, parameter2) {
    this.property1 = parameter1;
    this.property2 = parameter2;
  }
  get getterMethod() {
    return `${this.property1} ${this.property2}`;
  }
  set setterMethod(parameter) {
    const array = parameter.split(" ");
    this.property1 = array[0];
    this.property2 = array[1];
  }
}

const variableName = new ClassName("value1", "value2");
console.log(variableName);
// Output: ClassName { property1: 'value1', property2: 'value2' }
console.log(variableName.getterMethod);
// Output: value1 value2
const variableName2 = new ClassName("value1'", "value2'");
console.log(variableName2);
// Output: ClassName { property1: 'value1'', property2: 'value2'' }
console.log(variableName2.getterMethod);
// Output: value1' value2'
