let mapName = new Map();
mapName.set("1", "str1");
mapName.set(1, "num1");

// mapName.set(key, value)

console.log(mapName); // output: Map(2) { '1' => 'str1', 1 => 'num1' }
console.log(mapName.get(1)); // output: num1
console.log(mapName.get("1")); // output: str1
console.log(mapName.get(2)); // output: undefined
console.log(mapName.has(1)); // output: true
console.log(mapName.size); // output: 2

for (const element of mapName) {
  console.log(element);
}
//hasilnya sama dengan forEach
mapName.forEach((value, key) => console.log(`${key}: ${value}`)); // iterasi berdasarkan urutan input
