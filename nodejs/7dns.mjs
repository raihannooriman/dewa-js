import dns from "dns/promises";

const address = await dns.lookup("hanhub.vercel.app");
console.log(address.address);
console.log(address.family);
