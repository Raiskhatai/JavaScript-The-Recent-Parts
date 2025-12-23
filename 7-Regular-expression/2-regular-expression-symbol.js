let str = `the World!
My email is test.user_123@example-domain.com
Alternate mail: ADMIN@GMAIL.COM
Phone: +91-98765 43210, 09876543210
Date: 21/12/2025 and 2025-12-21
Price: ₹499, $19.99, 1000€
Username: user_name99, user-name, user.name
Password samples,the: Pass@123,tHE, weakpass, STRONG#456
URL: https://www.example.com/path?query=1#hash
IP Address : 192.168.1.1
Special chars: !@#$%^&*()_+-=[]{}|;:'",.<>/?\
Spaces    Tabs	and Address and tempAddress 
New
Lines
End`;

/* \b yeh check karta hey word ke start yeh char hey kya  ex => \bAddress */

// let val = /\bAddress/g;
// console.log(str.match(val));    // [ 'Address', 'Address' ]

// let val = /\bAddress/g;
// console.log(str.match(val)); // [ 'Address', 'Address' ]

// val = /Address\b/g;
// console.log(str.match(val)); // [ 'Address', 'Address', 'Address' ]

/* .  jis char ko search karna ho uske sath koi char chalega tab */

// let val = /.t/g;
// console.log(str.match(val)); // [' t', 'st', 'lt','at', 'at', ',t',',t', 'ht', 'at'];

// let val = /t./g;
// console.log(str.match(val)); //['th', 'te', 't.','te', 'te', 'te','th', 'tH', 'tt','th'];

// let val = /t../g;
// console.log(str.match(val)); // ['the', 'tes', 't.u','ter', 'te ', 'te:','the', 'tHE', 'ttp','th?'];

/* [\s] only select spaces ' '*/
/* [\S] not select spaces ' ' */

// let val = /[\s]/g;
// console.log(str.match(val));

// let val = /[\S]/g;
// console.log(str.match(val));

/* [\w] special symbol ko select mat karna only words and numbers  =  [a-zA-Z0-9]*/
/* [\W] special symbol ko select karna words and numbers nhi*/

// let val = /[\w]/g;
// console.log(str.match(val));

// let val = /[\W]/g;
// console.log(str.match(val));

/* [\d] all digit ko select  [\D] digit ke alawa sab select karo */
// [\d] = [0-9] and [\D] = [^0-9] // ^ means iske alawa .

// let val = /[\d]/g;
// console.log(str.match(val));

// let val = /[\D]/g;
// console.log(str.match(val));

/* using special character */
/* [] in breakets ke andar vali values ko he select karega */

// let val = /[a-z]/g; // a se z tak sare small char
// console.log(str.match(val));

// val = /[A-Z]/g; // A se Z tak sare capital char
// console.log(str.match(val));

// val = /[A-z]/g; // A se z tak sare capital and small char
// console.log(str.match(val));

// val = /[0-9]/g; // 0 to 9 digit
// console.log(str.match(val));

// val = /[a-zA-Z0-9$,']/g;      // a to z A to Z 0 to 9 $ symbol , symbol etc.
// console.log(str.match(val));

// val = /\]/g;
// console.log(str.match(val));

/* g , i ,m */
// let val = /the/gim; // g : globally , i flag insensitve , m next line bhi.
// let other = val.exec(str).index;
// other = val.exec(str).index;
// other = val.exec(str).index;
// other = val.exec(str);

// let other2 = str.match(/the/gi);
// console.log(other2);

// g : global flag .
// let val = /the/gm;
// let other = val.exec(str).index;
// console.log(other);     // 0
// other = val.exec(str).index;
// console.log(other);     // 244
// other = val.exec(str).index;
// console.log(other);     // 258
// other = val.exec(str);
// console.log(other);     // null
