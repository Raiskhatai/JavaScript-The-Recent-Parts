// parameter destrucring :

// destructuring :
// 1.
// function data({ a, b, c } = {}) {
//   // default = {}
//   console.log(a, b, c);
// }
// data({ a: 1, b: 2, c: 20 });

// 2.
function data(temp = {}) {
  let { a, b, c } = temp;
  console.log(a, b, c);
}

data({ a: 1, b: 2, c: 20 });

// normal :
// function data(temp) {
//   // default = {}
//   console.log(temp.a, temp.b, temp.c);
// }
// data({ a: 1, b: 2, c: 20 });
