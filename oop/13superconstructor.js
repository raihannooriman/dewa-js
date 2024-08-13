class ClassName {
  constructor(parameter1) {
    this.property1 = parameter1;
  }
  methodName(parameter1) {
    console.log(`Ini ${parameter1}, dan ini ${this.property} ClassName.`);
  }
}

const variableName = new ClassName("value1");
console.log(variableName);
console.log(variableName.property1);

class ClassInheritance extends ClassName {
  constructor(parameter1, parameter2) {
    super(parameter1); // super() digunakan untuk mengakses constructor parent class "ClassName" dan mengambil parameter yang dimiliki oleh parent class "ClassName"
    this.property2 = parameter2; // parameter2 adalah parameter yang dimiliki oleh class "ClassInheritance"
  }
}

const variableName2 = new ClassInheritance("value2", "value2-2");
console.log(variableName2);
// output: ClassInheritance { property1: 'value2', property2: 'value2-2' }
console.log(`${variableName.property1} ${variableName2.property2}`);
// output: value1 value2-2
