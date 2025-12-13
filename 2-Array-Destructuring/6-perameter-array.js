// Function ke parameter me hi array ko destructure kar lena, instead of function ke andar alag se destructuring karne ke.

// function data([one, two, three]) {
//   console.log(one, two, three);
// }

// let arr = [44, , 66];
// data(arr); // 44 undefined 66

// without destucture :

// function data(one, two, three, ...rest) {
//   console.log(one, two, three, rest);
// }

// let arr = [44, , 66, 66, 443, 4334, 342, 908];
// data(arr);  // [ 44, <1 empty item>, 66, 66, 443, 4334, 342, 908 ] undefined undefined [] without destucture .

// with destructure :

// function data([one, two, three, ...rest]) {
//   console.log(one, two, three, rest);
// }

// let arr = [44, , 66, 66, 443, 4334, 342, 908];
// data(arr);  // 44 undefined 66 [ 66, 443, 4334, 342, 908 ]

/* mistake  */

function data() {
  return null;
}

let temp = data();
[first, second, third, ...four] = temp;
console.log(first, four);       // TypeError: object null is not iterable (cannot read property Symbol(Symbol.iterator))
