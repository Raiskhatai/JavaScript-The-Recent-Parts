// look ahead and negative look ahead .

let str = `is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the 
industry's standard dummy ever since the 1500s, when an unknown printer took a galley of type
 and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages dummy text,
  and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. `;

/* look ahead ex : - wah dummy jiske aage ( --> ) text aaya ho. syntax : word ahead word  (?= )*/
//  dummy word hona chahiye.
// let look_ahead = /dummy (?=)/gim;
// console.log(look_ahead.exec(str).index); // 10
// console.log(look_ahead.exec(str).index); // 109
// console.log(look_ahead.exec(str).index); // 452

// specific dummy ke baad specific word hona chahiye ;
// let look_ahead = /dummy (?=text)/gim;
// console.log(look_ahead.exec(str).index); // 10
// console.log(look_ahead.exec(str).index); // 452
// console.log(look_ahead.exec(str).index); // error

/* negative look ahead ex : - wah dummy jiske aage text nhi ho text ke alawa word ho (?!)*/
// let negative_look_ahead = /dummy (?!text)/gim;
// console.log(negative_look_ahead.exec(str).index); // 109
// console.log(negative_look_ahead.exec(str)); // null
