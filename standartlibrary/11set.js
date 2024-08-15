let setName = new Set();

setName.add("data1");
setName.add("data2");
setName.add("data3");
setName.add("data3"); // tidak akan ditambahkan karena duplikat
setName.forEach((value) => console.log(value)); // output: data1 data2 data3 iterasi berdasarkan urutan input

console.log(setName); // output: setName(3) { 'data1', 'data2', 'data3' }
