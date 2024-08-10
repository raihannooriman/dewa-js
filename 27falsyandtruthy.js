let data = false;
let check = data ? "truthy" : "falsy";
console.log(check); // Output: falsy
//penjelasan:
// daftar nilai yang dianggap falsy:
// false, 0, -0, 0n, "", null, undefined, NaN
// selain nilai di atas, akan dianggap truthy
// yaitu true, +-x!=0, "string", [], {}, function(){}
