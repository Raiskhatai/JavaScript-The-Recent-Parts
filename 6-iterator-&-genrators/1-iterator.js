// ek aisa object jo data ko step-by-step (ek-ek karke) access karne deta hai, bina poora data ek sath dene ke.

// Iterator ek object hota hai jo data ko step by step deta hai using a method called next();
// iterator jitna chalana chao utna chalta hey or jab chaho tab next value milegi ex : remote ki tarah next channel.

function value() {
  return [1, 2, 3, 4];
}

var arr = value();

var ite = arr[Symbol.iterator]();
console.log(ite.next()); // { value: 1, done: false }
console.log(ite.next()); // { value: 2, done: false }
console.log("hello"); // hello
console.log(ite.next()); // { value: 3, done: false }
console.log(ite.next()); // { value: 4, done: false }
console.log(ite.next()); // { value: undefined, done: true }

function val() {
  return "helloo";
}

console.log("--------------");

var str = val();

var ite = str[Symbol.iterator]();
console.log(ite.next()); // { value: 'h', done: false }
console.log(ite.next()); // { value: 'e', done: false }
console.log("hello"); // hello
console.log(ite.next()); // { value: 'l', done: false }
console.log(ite.next()); // { value: 'l', done: false }

// how iterator work or custom made iterator .

function other(arr) {
  let count = 0;
  return {
    next_copy() {
      if (count < arr.length) {
        return {
          value: arr[count++],
          done: false,
        };
      } else {
        return {
          value: undefined,
          done: true,
        };
      }
    },
  };
}

var arr = [1, 2, 3, 4];

let num = other(arr);
console.log("-----------");
console.log(num.next_copy()); // { value: 1, done: false }
console.log(num.next_copy()); // { value: 2, done: false }
console.log(num.next_copy()); // { value: 3, done: false }
console.log(num.next_copy()); // { value: 4, done: false }
console.log(num.next_copy()); // { value: undefined, done: true }

// object par iterable

// Normal object pe for...of direct kaam nahi karta
// Kyuki plain object iterable nahi hota.

// var obj = { a: 1, b: 2 };

// for (let x of obj) {
//   console.log(x); // TypeError : TypeError: obj is not iterable
// }

// var obj = { a: 1, b: 2 };
// console.log([...obj]);      // TypeError: obj is not iterable

// Solution: Object ko iterable banana (Iterator lagana).
// Object ko iterable banane ke liye usme [Symbol.iterator]() define karna padta hai.
// Rule yaad rakho.
// Agar kisi object me [Symbol.iterator] ho wo iterable ban jata hai.

var obj = {
  a: 10,
  b: 20,
  c: 30,
  [Symbol.iterator]: function () {
    var keys = Object.keys(this);
    var index = 0;
    return {
      next: () =>
        index < keys.length
          ? { done: false, value: this[keys[index++]] }
          : { done: true, value: undefined },
    };
  },
};

console.log([...obj]); //  [ 10, 20, 30 ]
