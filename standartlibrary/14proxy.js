const target = {};
const handler = {
  get: (target, property) => {
    console.log(`Accessed property: ${property}`);
    return target[property];
  },
  set: (target, property, value) => {
    console.log(`Changed property ${property}: ${value}`);
    target[property] = value == null ? "null" : value;
  },
};

const proxy = new Proxy(target, handler);
proxy.name = "proxy";
proxy.age = 20;
console.log(proxy.name);
console.log(proxy.age);
console.log(target);

//output:
// Changed property name: proxy
// Changed property age: 20
// Accessed property: name
// proxy
// Accessed property: age
// 20
// { name: 'proxy', age: 20 }
