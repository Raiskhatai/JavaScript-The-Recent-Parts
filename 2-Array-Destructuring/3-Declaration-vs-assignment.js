// declare vs assign

// // assign nomal :
// function data() {
//   return [20, 32, 52];
// }

// let temp = data();
// let one, two, three, four;

// one = temp[0];
// two = temp[1];
// three = temp[2];
// four = temp.slice(3);
// five = temp[5];
// console.log(one, two, three, four, five); // 20 32 52 [] undefined

// assign destucture :

// function data() {
//   return [20, 32, 52];
// }

// let temp = data();
// let one, two, three, four;

// [one, two, three, ...four] = temp;
// console.log(one, two, three, four); // 20 32 52 []

// declare :

// [a, b] = [10, 21];
// console.log(a, b);

// destructure :

// assign :
// function data() {
//   return [1, 2, 3];
// }

// let temp = data();
// let o = [];
// [o[3], o[43], o[32], ...o[100]] = temp;
// console.log(o[2], o[3], o[43], o[32], o[100]);  // undefined 1 2 3 []

// normal:
// function data() {
//   return [1, 2, 3];
// }

// var temp = data();
// var o = [];

// o[3] = temp[0];
// o[10] = temp[1];
// o[42] = temp[2];
// o[40] = temp.slice(3);

// console.log(o[1]); //undefined
// console.log(o[2]); //undefined
// console.log(o[3]); //1
// console.log(o[10]); //2
// console.log(o[42]); //3
// console.log(o[40]); //[]

