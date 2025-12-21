// function for regex exec(),test(),search(),match(),replace().

// exec() : it gives array if value hey warna null

// let val = /hi/gi;    // g means global. i means insensitive.
// console.log(val);   // /hi/
// console.log(val.source);    // hi

// let str1="hello hi is a good guy he was work for hi company for high payment and he has brother name HI";
// let res1=val.exec(str1);
// console.log(res1);              // index :6
// res1=val.exec(str1);
// console.log(res1);      // index :39
// res1=val.exec(str1);
// console.log(res1);      // index :59
// res1=val.exec(str1);
// console.log(res1);      // index : 91
// res1=val.exec(str1);
// console.log(res1);      // null

/* test() : return true if value hey warna false */

// let val = /hi/gi;    // g means global. i means insensitive.
// console.log(val);   // /hi/
// console.log(val.source);    // hi

// let str1="hello hi is a good guy he was work for hi company for high payment and he has brother name HI";
// let res1=val.test(str1);
// console.log(res1);              // true


/* search() give index number agar hey to warna -1 isme i kaam karta hey lekin g nhi*/
// let val = /hi/;    // g means global. i means insensitive.
// console.log(val);   // /hi/
// console.log(val.source);    // hi

// let str1="hello HI is a good guy he was work for hi company for high payment and he has brother name HI";
// let res1=str1.search(val);
// console.log(res1);              // 39
// res1=str1.search(val);
// console.log(res1);              // 39

/* match() */

// let val = /hi/gi;    // g means global. i means insensitive.
// console.log(val);   // /hi/
// console.log(val.source);    // hi

// let str1="hello hi is a good guy he was work for hi company for high payment and he has brother name HI";
// let res1=str1.match(val);
// console.log(res1);              // ['hi', 'hi', 'hi', 'HI']

// replace() : ]

// let val = /hi/gi;    // g means global. i means insensitive.
// console.log(val);   // /hi/
// console.log(val.source);    // hi

// let str1="hello hi is a good guy he was work for hi company for high payment and he has brother name HI";
// let res1=str1.replace(val,"hello");
// console.log(res1);              // hello is a good guy he was work for hello company for hellogh payment and he has brother name hello
