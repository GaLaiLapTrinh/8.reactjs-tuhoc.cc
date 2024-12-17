//Cách 1: khai báo hàm, biến, class rồi export
// const myVar = 100;

// function myFunction() {
//   console.log("Xin chào đây là hàm");
// }

// export {myVar, myFunction};

//cách 2: export tại nơi khai báo
export const myVar = 100;

export function myFunction() {
  console.log("Xin chào đây là hàm");
}

//file có 1 export default
let df2 = "Đây là biến default 2 trong named.js";
export default df2;
