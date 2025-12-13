// spread operator and declating destuctured .

// function data() {
//   return [3, 4, 5];
// }

// let arr1 = ["shahrukh", "salman", "aamir", 1, 2, 3];
// let [...a] = arr1;
// console.log(a);


// let temp;
// let [first, second, third, ...rest] = temp = data();
// console.log(first, ...rest); //3 //
// console.log(temp); // [3,4,5]

// rest Operator (...) vs Spread Operator (...)
// Syntax same hota hai (...),
// Meaning aur use-case different hota hai

// 1 Rest Operator (...)
// Rest ka matlab:
// “Bachi hui values ko ikattha karna”
// Use cases
// Function parameters me
// Destructuring me

// 2 Spread Operator (...)
// Value ko phaila dena (jese string ke har char ko array mey convert karna)
/*  Use cases : */
// Array copy karna
// Array merge karna
// Object copy / merge
// Function call me values ko alag-alag pass karna

//  Rule 1
// ... agar assignment / parameter ke LEFT side pe hai → REST (bandh raha)
// function fn(...x) {}
// let [a, ...b] = [1,2,3];
// let {name, ...rest} = obj;

//  Hamesha REST
//  Kyunki x, b, rest variable hain jo values le rahe hain

//  Rule 2
// ... agar RIGHT side pe hai → SPREAD (khol raha)
// fn(...arr);
// let c = [...a, ...b];
// let obj2 = {...obj1};

//  Hamesha SPREAD
//  Kyunki yahan value ko tod ke use kiya ja raha hai

// Bas itna yaad rakh

// LEFT = REST
// RIGHT = SPREAD

/* 1 )rest Operator : */
// Example 1 : Distructuring me rest :

// let [one, two, ...rest] = [2, 3, 56, 78, 54];
// console.log(rest); // [ 56, 78, 54 ]

// Example 2: Function me rest
// function add(...numbers) {  // ...numbers = 1,2,3,4
//   return numbers;
// }
// add(1, 2, 3, 4);

/*  2) spread operator : */
// Example 1: Array ko spread karna:
// let arr = [1, 2, 3];
// let newArr = [...arr, 4, 5];
// console.log(newArr); // [ 1, 2, 3, 4, 5 ]

// let str = "shahrukh";
// let val = [...str];
// console.log(val); // [  's', 'h', 'a',  'h', 'r', 'u',  'k', 'h'];

// Example 2: Array copy
// let a = [10, 20];
// let b = [...a];
// console.log(b); //[10,20]

// Example 3: Object spread
// let obj1 = { name: "Rais" };
// let obj2 = { age: 22 };
// let obj3 = { ...obj1, ...obj2 };
// console.log(obj3); // { name: 'Rais', age: 22 }

// Example 4: Function call me spread
// function sum(a, b, c) {
//   return a + b + c;
// }
// let nums = [1, 2, 3];
// let val = sum(...nums);
// console.log(val);   // 6

// Example 5 : Function call me spread

// function sum(...val) {
//   let sum = 0;
//   for (let i = 0; i < val.length; i++) {
//     sum += val[i];
//   }
//   return sum;
// }
// let nums = [1, 2, 3];
// let val = sum(...nums);
// console.log(val); // 6
