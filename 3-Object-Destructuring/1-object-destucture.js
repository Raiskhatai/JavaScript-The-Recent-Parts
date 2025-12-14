// Object Destructuring is a JavaScript ES6 feature that allows extracting object properties into distinct variables using a concise and readable syntax, without repeatedly accessing the object.

// DESTRUCTURING WAY :

let user = {
  fname: "salman",
  last_name: "khan",
  address: "xyz",
  mo_no: "abc",
};

let { fname: a, last_name: b, ...anything } = user || {}; // a and b rename(alias) hey fname ka
console.log(a, b, anything);

// NORMAL WAY :

// let user = {
//   fname: "shahrukh",
//   last_name: "khan",
// };

// a = user.fname;
// b = user.last_name;
// console.log(a, b);
