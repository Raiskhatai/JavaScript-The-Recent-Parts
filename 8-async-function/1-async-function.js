/* sync vs async */

// function ko async karne ke liye settimeout ka use kiya jata hey.
// async with promisses.

/* 1 */
// let promisses = new Promise((resolve, reject) => {
//   console.log("hi");
// });
// promisses.then();   // hi;  // promisses function ko call kiya is liye .

/* 2 */
// let promisses = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     console.log("calculating...");
//     resolve(2 + 5);
//   }, 1000);
// });

// // then is higher order function. inside then (val)=>{} is callback argument. resolve is callback parameter.  resolve() means calling then ke andar wala argument function.
// promisses.then((val) => {
//   console.log(val);
// });

/* 3 */
// new Promise((resolve, reject) => {
//   setTimeout(() => {
//     console.log("async task 2");
//     resolve();
//   }, 2000);
// }).then(() => console.log("async 2 resolved..."));

/*  4 */
// let promisses = new Promise(function (resolve, reject) {
//   setTimeout(function () {
//     resolve({ username: "chai", email: "chai@gmail.com" });
//   }, 2000);
// });

// promisses.then(function (val) {
//   console.log(val);
// });

/* 5 promise chain */
// let promisses = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     let error = false;
//     if (!error) {
//       resolve({ username: "sharukh", age: 12 });
//     } else {
//       reject("ERROR : wrong value");
//     }
//   }, 2000);
// });
// // promisses ka first then return kar rha or second wala parameter mey uska le rha yehi hey promise chain.
// promisses
//   .then((val) => {
//     console.log(val); //  { username: 'sharukh', age: 12 }
//     return val.username;
//   })
//   .then((username) => {
//     console.log(username); //  sharukh
//   })
//   .catch((val) => {
//     console.log(val); // ERROR : wrong value.;  //if agar hum catch ke syntax ko sahi write na kare tab unhandledPromiseRejection:error aati hey.
//   });

/* 6 */


/* end of promise */
// async funtion with settimeout.
// async with settimeout function. jis function ko jayda time lag sakta hey usko 2 sec. jiska ko kum usko 1 sec.
// async function with settimeout is not readable .

// function check_inventory(callback) {
//   setTimeout(() => {
//     console.log("checking inventory...");
//     callback();
//   }, 2000);
// }
// function create_order(callback) {
//   setTimeout(() => {
//     console.log("creating order...");
//     callback();
//   }, 1000);
// }
// function charging_payment(callback) {
//   setTimeout(() => {
//     console.log("charging payemnt...");
//     callback();
//   }, 2000);
// }
// function send_invoice(cb) {
//   setTimeout(() => {
//     console.log("sending invoice...");
//     cb();
//   }, 1000);
// }

// main();

// function main() {
//   check_inventory(() => {
//     create_order(() => {
//       charging_payment(() => {
//         send_invoice(() => {
//           console.log("end ... ");
//         });
//       });
//     });
//   });
// }

// wrong way function call kar rhey hey sab.    X
// function main() {
//   check_inventory(create_order(charging_payment(send_invoice())));
// }

// isse order chenge ho gaya. X
// function main() {
//   check_inventory(); // creating order...
//   create_order(); // sending invoice...
//   charging_payment(); // checking inventory...
//   send_invoice(); // charging payemnt...
// }

// sync
// function check_inventory() {
//   console.log("checking inventory...");
// }
// function create_order() {
//   console.log("creating order...");
// }
// function charging_payment() {
//   console.log("charging payemnt...");
// }
// function send_invoice() {
//   console.log("sending invoice...");
// }

// // kisi function me long proccess ho to next wale ko wait karna padta hey sync line by line ke karn.
// function main() {
//   check_inventory(); //   check_inventory();
//   create_order(); //   create_order();
//   charging_payment(); //   charging_payment();
//   send_invoice(); //   send_invoice();
// }
// main();
