// 1. Trim() string ke aage aur peeche ke spaces ko remove karta hai.
// 2. Padding ka matlab hai string ko fix length ka banana by adding characters.

// 2. padStart = right end padding
// method name = padStart()

let str = "hello";

let padstart = str.padStart(5);
console.log(padstart); // hello

let padstart1 = str.padStart(8);
console.log(padstart1); //    hello

let padstart2 = str.padStart(8, "*");
console.log(padstart2); // ***hello

let padstart3 = str.padStart(8, "12345");
console.log(padstart3); // 123hello

let padstart4 = str.padStart(8, "ab");
console.log(padstart4); // abahello

// padEnd = right end padding
// method name = padEnd()

let str2 = "hello";

let padend = str2.padEnd(5);
console.log(padend); //hello

let padend1 = str2.padEnd(8);
console.log(padend1); //"hello   "

let padend2 = str2.padEnd(8, "*");
console.log(padend2); //hello***

let padend3 = str2.padEnd(8, "12345");
console.log(padend3); //hello123

let padend4 = str2.padEnd(8, "ab");
console.log(padend4); //helloaba

// 1. trim:

let strTrim = "       hello       ";
let trimstr = strTrim.trim();
console.log(strTrim); //"        hello       "
console.log(strTrim.length); // 19
console.log(trimstr); // "hello"
console.log(trimstr.length); // 5

// a. trim start :

let strTrimStart = "       hello       ";
let trimstrStart = strTrimStart.trimStart();
console.log(strTrimStart); //"        hello       "
console.log(strTrimStart.length); // 19
console.log(trimstrStart); // "hello       "
console.log(trimstrStart.length); // 12

// b. trim end :

let strTrimEnd = "       hello       ";
let trimstrend = strTrimEnd.trimEnd();
console.log(strTrimEnd); //"        hello       "
console.log(strTrimEnd.length); // 19
console.log(trimstrend); // "       hello"
console.log(trimstrend.length); // 12
