// Object Default Destructuring is a JavaScript feature that allows assigning default values to variables when the corresponding object properties are undefined or missing during destructuring.
// Default value sirf tab use hoti hai jab property undefined ho — null par nahi.

// function data() {
//   // return {name:"shahrukh",age:20};
//   return;
// }

// // let user = data();
// // let { name: a, age, b } = user;
// // console.log(a, b);  // typeError

// let user = data();
// let { name: a, age: b } = user || {};
// console.log(a, b);  // undefined undefined

/*  WE USE OBJECT PROPERTY NAME AS VARIABLE  */
// two ways to do that.

// function data() {
//   return { name: "shahrukh", age: 20 };
// }

// 1. way.
// let user = data();
// let { name: name, age: age } = user;
// console.log(name, age);

// 2. way.
// let user = data();
// let { name, age } = user; // directly
// console.log(name, age);  shahrukh 20

/* default */

// function data() {
//   return { age: 20 };
// }

// let user = data() || {};
// let { name = 10, age } = user;

// console.log(age, name);     // 20 10
