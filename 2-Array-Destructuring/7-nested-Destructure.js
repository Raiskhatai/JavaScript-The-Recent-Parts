// nested array :

// destructuring way :
function data() {
  return [1, 2, [3, 4], 5, 6];
}

[one, two, three, four, five] = data();
console.log(one, two, three, four, five); // 1 2 [ 3, 4 ] 5 6

[one, two, [three, four] = [], five, six] = data() || [];
console.log(one, two, three, four, five, six); // 1 2 3 4 5 6

// normal way :

// function data() {
//   //   return [1, 2, 3, [4, 5], 6];
//   return [1, 2, 3, undefined, 6]; // type error : for avoid this error line 25.
// }

// let temp = data() || [];
// let one = temp[0];
// let two = temp[1];
// let three = temp[2];
// let other_arr = temp[3] || [];
// let four = other_arr[0];
// let five = other_arr[1];
// let six = temp[4];

// console.log(one, two, three, four, five, six, other_arr); // 1 2 3 4 5 6 [ 4, 5 ]
