class ClassName {}
class ClassName2 extends ClassName {}

const variable = new ClassName();
const variable2 = new ClassName2();

console.log(variable instanceof ClassName); // true, 'variable' adalah instance dari 'ClassName'
console.log(variable instanceof ClassName2); // false 'variable' bukan instance dari 'ClassName2' tetapi dari 'ClassName'.
console.log(variable2 instanceof ClassName); // true 'variable2' adalah instance dari 'ClassName2', yang mewarisi dari 'ClassName'. Oleh karena itu, 'variable2' juga dianggap sebagai instance dari 'ClassName'.
console.log(variable2 instanceof ClassName2); // true 'variable2' adalah instance dari 'ClassName2', karena dibuat menggunakan 'new ClassName2()'.
