class ClassName {
  constructor(parameter1) {
    this.property1 = parameter1; // Menginisialisasi properti dari parameter1
  }

  methodName(parameter1) {
    // Menerima parameter untuk methodName
    console.log(`Ini ${parameter1}, dan ini ${this.property1} ClassName.`);
  }
}

const variableName = new ClassName("value1");
console.log(variableName); // Output: ClassName { property1: 'value1' }
console.log(variableName.property1); // Output: value1

class ClassInheritance extends ClassName {
  constructor(parameter1, parameter2) {
    super(parameter1); // Memanggil constructor dari ClassName
    this.property2 = parameter2; // Menginisialisasi properti dari parameter2
  }

  methodName(parameter1, parameter2) {
    // Menerima dua parameter untuk methodName
    super.methodName(parameter1); // Memanggil methodName dari ClassName dengan parameter1
    console.log(
      `Ini ${parameter1}, ${parameter2}, dan ini ${this.property2} ClassInheritance.`
    );
  }
}

const variableName2 = new ClassInheritance("value2", "value2-2"); // ini parameter1 dan parameter2 khusus untuk properti pada ClassInheritance
console.log(variableName2);
// Output: ClassInheritance { property1: 'value2', property2: 'value2-2' }
console.log(`${variableName.property1} ${variableName2.property2}`);
// Output: value1 value2-2

variableName2.methodName("value'2", "value'2-2"); // ini parameter1 dan parameter2 khusus untuk methodName
// Output: Ini value'2, dan ini value2 ClassName.
// Output: Ini value'2-2, dan ini value2-2 ClassInheritance.
