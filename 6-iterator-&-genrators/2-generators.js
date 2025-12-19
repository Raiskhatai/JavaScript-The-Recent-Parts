// Generator ek special function hota hai jo values ko ek-ek karke generate karta hai, poori list ek sath nahi deta.
// Iska matlab: pause → resume ho sakta hai.
// Generator ka main keyword.Generator yield use karta hai.yield ka matlab:“value do aur yahin ruk jao

// generator mey * function ke name se pahle important hey warna :
// TypeError: ite.next is not a function

// yeild ka kaam :
// yield 1 → value deta hai aur pause
// next() dubara call → wahi se continue
// Jab sab yield khatam → done: true

// example of generator  :

// function *main() {
//   yield 1;
//   return 2;
// }

// var ite = main();
// console.log(ite.next());         // { value: 1, done: false }
// console.log(ite.next()); // { value: 2, done: true }

// function * main() {
//   let a = 1;
//   return 2;
// }

// var ite = main();
// console.log(ite.next()); // { value: 2, done: true }
// console.log(ite.next()); // { value: undefined, done: true }

// ex 1 =

// function* main() {
//   yield 1;
//   yield 2;
//   yield 3;
//   yield 4;
//   return 5;     // return work but bad prectice .
// }

// console.log([...main()]);

// var ite = main();
// console.log(ite.next()); // { value: 1, done: false }
// console.log(ite.next()); // { value: 2, done: false }
// console.log(ite.next()); // { value: 3, done: false }
// console.log(ite.next()); // { value: 4, done: false }
// console.log(ite.next()); // { value: 5, done: true }

// ex 2 =

// var obj = {
//     a:1,
//     b:2,
//     c:3,
//     *[Symbol.iterator](){
//         for(let key of Object.keys(this)){
//             yield this[key];
//         }
//     }
// }

// [...obj];   // JavaScript environment ES6 / ES2015 support nahi kart
