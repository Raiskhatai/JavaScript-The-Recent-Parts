var msg = "hello world";

console.log(msg.match(/(.l)/g)); // . means koi bhi value magar l se pahle ;    // op : [ 'el', 'rl' ]
console.log(msg.match(/(l.)/g)); // . means koi bhi value magar l se baad ; // op : [ 'll', 'ld' ]
console.log(msg.match(/(l.)$/g)); // $ end se   // [ 'ld' ]

/* look ahead   negative look ahead */

console.log(msg.match(/(e..)(?=o)/g)); // [ 'ell' ]
console.log(msg.match(/(r)(?=l)/g)); // [ 'r' ]
console.log(msg.match(/(e)(?=o)/g)); // null

console.log(msg.match(/(e.)(?!o)/g)); // [ 'el' ]

/* look behind   negative look ahead */

console.log(msg.match(/(?<=e)(l.)/g)); // ['ll']

console.log(msg.match(/(?<!e)(l.)/g)); // [ 'lo', 'ld' ]

/* named capture group */

var msg1 = "hello world";
console.log(msg1.match(/.(l.)/g)); // [ 'ell','rid']
console.log(msg1.match(/([jkl])o wor\l/)); // [ 'lo worl', 'l', index: 3, input: 'hello world', groups: undefined ]
console.log(msg1.match(/(?<anything>l.)/).groups); // [Object: null prototype] { anything: 'll' }
console.log(msg1.match(/(?<cap>[jkl])o wor\k<cap>/)); // ['lo worl','l',]
console.log(msg1.replace(/(?<cap>l.)/g, "-$<cap>-")); // he-ll-o wor-ld-

console.log(
  msg1.replace(/(?<cap>l.)/g, function re(...args) {
    var [, , , , { cap }] = args;
    return cap.toUpperCase();
  })
); // heLLo worLD

var msg2 = "name123@gmail.com";
console.log(msg2.match(/\w+/g));

/* dottal mode */

let msg3 = `
the quick brown fox 
jumps over the 
lazy dog
`;

console.log(msg3.match(/brown.*over/)); // null
console.log(msg3.match(/brown.*over/g)); // null
console.log(msg3.match(/brown.*over/gi)); // null
console.log(msg3.match(/brown.*over/s)); // ["brown fox \n jumps over "];
