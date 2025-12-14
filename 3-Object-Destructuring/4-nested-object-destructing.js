// destructing :

// function data() {
//   return {
//     a: "20",
//     b: {
//       //   a: "40",   // isse error aayegi SyntaxError: Identifier 'a' has already been declared.
//       c: "shahrukh",
//       d: "salman",
//     },
//   };
// }

// let {
//   a,
//   b: { c, d },
// } = data();

// console.log(a, c, d); //  IMP > b ek object hey ise nhi likhenge .

//  NORMAL :

// function data() {
//   return {
//     a: "20",
//     b: {
//       //   a: "40",   // isse error aayegi SyntaxError: Identifier 'a' has already been declared.
//       c: "shahrukh",
//       d: "salman",
//     },
//   };
// }

// let temp = data();

// let a = temp.a;
// let b = temp.b;
// let c = b.c;
// let d = b.d;

// console.log(a, b, c, d);    // 20 { c: 'shahrukh', d: 'salman' } shahrukh salman
