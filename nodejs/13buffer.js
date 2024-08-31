const buffer = Buffer.from("Raihan", "utf-8");
console.log(buffer);
// <Buffer 52 61 69 68 61 6e>
console.log(buffer.toString());
// Raihan
console.log(buffer.toString("hex"));
// 52616968616e
console.log(buffer.toString("base64"));
// UmFpaGFu
console.log(buffer.toString("ascii"));
// Raihan
console.log(buffer.toString("base64url"));
// UmFpaGFu

const bufferBase64 = Buffer.from("UmFpaGFu", "base64");
console.log(bufferBase64.toString("utf-8"));
// Raihan

buffer.reverse();
console.log(buffer.toString());
