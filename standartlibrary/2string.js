const string = "Hello, World!";
console.log(string); // Hello, World!

// instance methods
console.log(string.length); // 13
console.log(string.charAt(0)); // H
console.log(string.charCodeAt(0)); // 72
console.log(string.concat(" Goodbye!")); // Hello, World! Goodbye!
console.log(string.includes("World")); // true
console.log(string.indexOf("World")); // 7

// static methods
console.log(string.toLowerCase()); // hello, world!
console.log(string.toUpperCase()); // HELLO, WORLD!
console.log(string.trim()); // Hello, World!
console.log(string.split(" ")); // ["Hello,", "World!"]
console.log(string.slice(7)); // World!
console.log(string.trimEnd()); // Hello, World!
