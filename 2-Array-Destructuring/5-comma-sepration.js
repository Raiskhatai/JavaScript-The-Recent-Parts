// let arr = [1, 2, 3];
// [a, b, c] = arr;    // ,,, pahla comma(,) first index : second comma (,) second index
// console.log(a, b, c);    // 1,2,3;

// let arr = [1, 2, 3];
// [a, , c] = arr;
// console.log(a, c);  //1,3

// pehla comma → index 0
// dusra comma → index 1
// teesra comma → index 2

// let arr = [1, 2, 3, 4, "shahrukh", "khan", , 8, 9, 10];
// [, , , , five, six, seve, ...rest] = arr;
// console.log(five, six, seve, rest); // shahrukh khan undefined [ 8, 9, 10 ]

/* swap using destructure */

// let a = 5,
//   b = 10;
// console.log(a, b); // 5 10
// [a, b] = [b, a];
// console.log(a, b); // 10 5
