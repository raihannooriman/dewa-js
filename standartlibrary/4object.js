{
  // object freeze dan seal
  const objectName = {
    property1: "value1",
    property2: "value2",
  };
  //gunakan salah satu
  // Object.freeze(object); // object tidak bisa diubah atau dihapus. Output property1: value1 property2: value2
  Object.seal(objectName); // object tidak bisa dihapus tapi bisa diubah. Output property1: value1.1, property2: value2

  objectName.property1 = "value1.1"; // value property1 diubah menjadi value1.1
  delete objectName.property2; // property2 dihapus
  console.log(objectName);
}
{
  // object assign
  const target = {
    iniTarget: "target",
  };
  const source = {
    iniSource: "source",
  };
  Object.assign(target, source); // menggabungkan semua properti dari source ke target, jika ada properti yang sama maka akan di timpa oleh value source
  console.log(target); // output { iniTarget: 'target', iniSource: 'source' }
}
{
  // object property name dan value
  const object = {
    name1: "value",
    name2: "value2",
  };
  console.log(Object.values(object)); // output [ 'value', 'value2' ]
  console.log(Object.getOwnPropertyNames(object)); // output [ 'name1', 'name2' ]
}
