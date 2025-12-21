let str = `the World!
My email is test.user_123@example-domain.com
Alternate mail: ADMIN@GMAIL.COM
Phone: +91-98765 43210, 09876543210
Date: 21/12/2025 and 2025-12-21
Price: ₹499, $19.99, 1000€
Username: user_name99, user-name, user.name
Password samples,the: Pass@123,tHE, weakpass, STRONG#456
URL: https://www.example.com/path?query=1#hash
IP Address: 192.168.1.1
Special chars: !@#$%^&*()_+-=[]{}|;:'",.<>/?\
Spaces    Tabs	and
New
Lines
End`;

/* using special character */

let val = /[a-z]/g; // a se z tak sare small char
console.log(str.match(val));

val = /[A-Z]/g; // a se z tak sare capital char
console.log(str.match(val));

val = /[A-z]/g; // a se z tak sare capital and small char
console.log(str.match(val));

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
