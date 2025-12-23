// look behind and negative look ahead .

let str = `is dummy simply  text of the printing and typesetting industry. Lorem Ipsum has been the 
industry's simply dummy ever since the 1500s, when an unknown printer took a galley of type
 and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages dummy text,
  and more recently with desktop publishing dummy like Aldus PageMaker including versions of Lorem Ipsum. `;

/* look behind ex : - wah word(simply) jiske pichhey dummy ( <-- ) aaya ho. syntax : word (?<= )  behind word*/
/* wah simply jisse pahle dummy aaya ho */
let look_behind = /(?<=dummy) simply/g;
console.log(look_behind.exec(str).index); // 8

/* negative look behind ex : - wah word pichhey dummy aaya ho but simply nhi. syntax : word (?<= )  behind word*/
/* wah simply jisse pahle dummy nhi aaya ho */

let negative_look_behind = /(?<!dummy) simply/g;
console.log(negative_look_behind.exec(str).index); // 100
// console.log(negative_look_behind.exec(str).index); // error
