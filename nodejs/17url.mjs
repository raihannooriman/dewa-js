import { URL } from "url";

const han = new URL("https://hanhub.vercel.app");

// mengubah host
han.host = "www.hanhub.com";
// mengubah path
han.searchParams.append("status", "active");

console.log(han.toString());
console.log(han.href);
console.log(han.protocol);
console.log(han.host);
console.log(han.pathname);
console.log(han.searchParams);
