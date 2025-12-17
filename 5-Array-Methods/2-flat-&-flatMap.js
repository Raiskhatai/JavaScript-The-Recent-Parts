// flat & flatmap or flat map.

var arr = [1, [[]], [2, 3], [4, 5], 6];
console.log(arr.flat(0)); // [ 1, [ [] ], [ 2, 3 ], [ 4, 5 ], 6 ] level 0;

var arr = [1, [[]], [2, 3], [4, 5], 6];
console.log(arr.flat(/* default : level 1 */)); // [1, [], 2, 3,4, 5,  6]

var arr = [1, [[]], [2, 3], [4, 5], 6];
console.log(arr.flat(2)); // [ 1, 2, 3, 4, 5, 6 ]

var infinite = [[[[[[[[21]]]]]]]];
console.log(infinite.flat(Infinity));   // [ 21 ]

/* map & flat */

var val = [1, 2, 3].map((item) => [item * 2, String(item * 2)]);
console.log(val); // [ [ 2, '2' ], [ 4, '4' ], [ 6, '6' ] ]
var last_val = val.flat();
console.log(last_val); // [ 2, '2', 4, '4', 6, '6' ]

/* flatMap */

var val = [1, 2, 3].flatMap((item) => [item * 2, String(item * 2)]);
console.log(val); // [ 2, '2', 4, '4', 6, '6' ]  // pahle map feer agar nester array ho tab flat.

var val = [1,2,3,4,5,6].flatMap(function doubleEvens (item) {
    if(item%2==0){
        return [item,item*2];
    }else{
        return [];
    }
})

console.log(val);