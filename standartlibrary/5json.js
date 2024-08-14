const objectName = {
  property1: "value1",
  property2: "value2",
  property3: "value3",
  property4: {
    subProperty1: "subValue1",
    subProperty2: "subValue2",
  },
  property5: [1, 2, 3, 4, 5],
};

const json = JSON.stringify(objectName); // konversi object ke stringjson, bisa juga array
console.log(json); // output {"property1":"value1","property2":"value2","property3":"value3","property4":{"subProperty1":"subValue1","subProperty2":"subValue2"},"property5":[1,2,3,4,5]}

const jsonObject = JSON.parse(json); // konversi stringjson ke object
console.log(jsonObject); // output { property1: 'value1', property2: 'value2', property3: 'value3', property4: { subProperty1: 'subValue1', subProperty2: 'subValue2' }, property5: [ 1, 2, 3, 4, 5 ] }
