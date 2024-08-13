class ClassName {
  constructor(parameter) {
    this.property = parameter;
  }
  methodName(parameter) {
    // method pada class ClassName dengan parameter "parameter" dan menggunakan property "property" pada class ClassName
    console.log(`Ini ${parameter}, dan ini ${this.property} ClassName.`);
  }
}

const variableName = new ClassName("value1");
console.log(variableName);
// output: ClassName { property: 'value21' } dengan prototype Object
console.log(variableName.property);
// output: value1
variableName.methodName("value'1");
// output: Ini value'1, dan ini value1 ClassName.

class ClassInheritance extends ClassName {
  // class ClassInheritance yang mewarisi class ClassName dengan menggunakan keyword extends
}

const variableName2 = new ClassInheritance("value2"); //instance dari ClassInheritance
console.log(variableName2);
// output: ClassInheritance { property: 'value2' } dengan prototype ClassName karena ClassInheritance mewarisi class ClassName
console.log(variableName2.property);
// output: value2
variableName2.methodName("value'2");
// output: Ini value'2, dan ini value2 ClassName.
