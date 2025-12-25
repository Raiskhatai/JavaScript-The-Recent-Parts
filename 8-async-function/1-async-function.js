/* sync vs async */

// async with promisses.

function check_inventory() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("inventory created...");
      resolve();
    }, 2000);
  });
}

function create_order() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("creating order...");
      resolve();
    }, 1000);
  });
}

function charging_payment() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("charging payment...");
      resolve();
    }, 2000);
  });
}

function send_invoice() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("sendinng invoice...");
      resolve();
    }, 1000);
  });
}

function main() {
  check_inventory()
    .then(create_order)
    .then(charging_payment)
    .then(send_invoice);
}

main();

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
