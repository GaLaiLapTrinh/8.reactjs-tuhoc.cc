// 1. lấy một phần tử cần thiết
// import {myVar} from "./named.js";
// console.log(myVar);

//2. hoặc chỉ lấy một số phần tử cần thiết
// import {myFunction, myVar} from "./named.js";
// console.log(myVar);
// myFunction();

//3. hoặc lấy tất cả
import * as name from "./named.js";
console.log(name.myVar);
name.myFunction();
//console.log(name.df2); //undefined

import df2, {myVar, myFunction} from "./named.js";
console.log(df2);

//4.import default
// import df from "./default.js";
// console.log(df);

import total from "./default.js";
console.log(total(9, 1));

//5.  Đổi tên khi import

//5.1 import default: đặt tên tuỳ ý
import B from "./default.js";
console.log(B(8, 5));

//5.2 import named: đặt tên với as
import {myVar as tenMoi} from "./named.js";
console.log(tenMoi);
