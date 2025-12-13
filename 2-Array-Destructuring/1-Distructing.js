// Destructuring JavaScript ka ek syntax hai jo array ya object se values ko directly variables me extract karne deta hai.

/* Destucturing way : Destucturing way is more cleaner and more easier.*/

// function data() {
//   return (arr = [22, 44, 55]);
// }

// // let [first, second, third] = data();
// // console.log(first, second, third);  // 22 44 55

// // let [first, , third] = data();
// // console.log(first, third); // 22 55

// let [first, second, third, fourth, fifth] = data();
// console.log(first, second, third, fourth, fifth); // 22 44 55 undefined undefined

// function data() {
//   return (arr = [22, , 55]);
// }

// let [first, second = 10, third] = data();
// console.log(first, second, third); // 22 10 55  : 10 second agar koi value nhi ya undefined hey to 10 kardo value hey to value do

// function data() {
//   return (arr = [22, 40, 55, 90, 66]);
// }

// let [one, two, three, ...rest] = data();
// console.log(one, two, three, rest); // 22 40 55 [ 90, 66 ] : rest work like slice opertor in this case ;

/*  simple way to get values from array : */

// function data() {
//   return (arr = [2, 4, 6]);
// }

// let temp = data();
// let first = temp[0];
// let second = temp[1];
// let third = temp[2];
// console.log(first, second, third);

// function data() {
//   return (arr = [2, undefined, 4, 6]);
// }

// let temp = data();
// let first = temp[0];
// let second = temp[1];
// let third = temp[2];
// console.log(first, second, third); // 2 undefined 4

// function data() {
//   return (arr = [2, null, 4, 6]);
// }

// let temp = data();
// let first = temp[0];
// let second = temp[1] !== undefined ? temp[1] : 10; // agar yaha distructuring ki tarah sirf 10 karde to wah value over write karke null ki jagah 10 kar deta jabki waha value hey
// let third = temp[2];
// console.log(first, second, third); // 2 null 4

function data() {
  return (arr = [22, 40, 55, 90, 66]);
}

let temp = data();
let one = temp[0];
let two = temp[1] !== undefined ? temp[1] : 10;
let three = temp[2];
let rest = temp.slice(3);
console.log(one, two, three, rest); // 22 40 55 [ 90, 66 ] ;
