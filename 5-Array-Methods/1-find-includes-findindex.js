// find methods // includes method // indexOf method // findIndex method

// find() array ka pehla element return karta hai jo given condition ko satisfy karta ho.
// Agar koi bhi element condition match nahi kare → undefined return hota hai.

var arr = [{ a: 1 }, { a: 2 }];
var res = arr.find(function match(item) {
  return item && item.a > 1;
});
console.log(res); // { a: 2 }

var arr = [{ a: 1 }, { a: 2 }];
var res = arr.find(function match(item) {
  return item && item.a > 10;
});
console.log(res); // undefined

var arr = [{ a: 1 }, { a: 2 }];
var res = arr.find(function match(item) {
  return item && item.a > 1;
});
console.log(res); // { a: 2 }

var arr = [{ a: 1 }, { a: 2 }];
var res = arr.find(function match(item) {
  return true;
});
console.log(res); // { a: 1 }

/* includes() check karta hai ki array ya string ke andar koi value exist karti hai ya nahi.
Return sirf true / false hota hai. */

var arr = [10, 20, NaN, 30, undefined, "hello"];
console.log(arr.includes(NaN)); // true
console.log(arr.includes(10)); // true
console.log(arr.includes(20)); // true
console.log(arr.includes(30)); // true
console.log(arr.includes("hello")); // true
console.log(arr.includes(undefined)); // true
console.log(arr.includes("hi")); // false

// findIndex() vs indexOf()

// indexOf() kya karta hai? Exact value search karta hai Pehli matching value ka index return. Nahi mili  -1

// findIndex() kya karta hai? "Condition (callback) ke basis par search karta hai Pehle element ka index return jo condition match kare" Nahi mila  -1

// indexof() :

var arr = [{ a: 1 }, { a: 2 }];
var res = arr.findIndex(function match(item) {
  return item && item.a > 1;
});
console.log(res); // 1

var arr = [{ a: 1 }, { a: 2 }];
var res = arr.findIndex(function match(item) {
  return item && item.a >= 1;
});
console.log(res); // 0

var arr = [{ a: 1 }, { a: 2 }];
var res = arr.findIndex(function match(item) {
  return item && item.a < 1;
});
console.log(res); // -1

var arr = [10, 23, NaN, 30, undefined, "hi"];
var res = arr.findIndex(function match(item) {
  return item === NaN;
});
console.log(res); // -1

// indexOf() :

var arr = [10, 23, NaN, 30, undefined, "hi"];

console.log(arr.indexOf(NaN)); // -1
console.log(arr.indexOf(10)); // 0
console.log(arr.indexOf(23)); // 1
console.log(arr.indexOf("hi")); // 5
console.log(arr.indexOf(undefined)); // 4
console.log(arr.indexOf(30)); // 3
