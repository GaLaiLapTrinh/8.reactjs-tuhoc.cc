//1. khai báo hàm Function declaration
function xinChao() {
  console.log("Xin chào bạn");
}

xinChao();

function xinChao2(userName) {
  console.log("Xin chào bạn " + userName);
}

xinChao2("Lan");
xinChao2("Nam");
xinChao2("Trang");
xinChao2();

function tich(c = 1, d) {
  return c * d;
}

let kq = tich(4, 6);
console.log(kq);

let kq2 = tich(undefined, 8);
console.log(kq2);

function xinChao3(userName = "No name") {
  console.log("Xin chào bạn " + userName);
}
xinChao3("Lợn");

//2. khai báo hàm Function expression
let tong = function (a, b) {
  return a + b;
};

console.log(tong(5, 3));
let kq3 = tong(4, 5);
console.log(kq3);

//3. arrow function
console.log("arrow function");
//3.1 Với trường hợp tổng quát, cú pháp
let ten_ham = (parameters) => {
  //Thân hàm
  //Return something
};

let multiplyAndAddArrow = (c, d) => {
  let product = c * d;
  let sum = c + d;
  return product + sum;
};

let kq4 = multiplyAndAddArrow(4, 5);
console.log(kq4);

//3.2 khi thân hàm chỉ có 1 câu lệnh duy nhất
let nhan = (a, b) => a * b;
let kq5 = nhan(9, 5);
console.log(kq5);

//3.3 khi trả về 1 đối tượng
// let person = (ten, tuoi) => {
//   return {"họ và tên": ten, "hưởng thọ": tuoi};
// };

let person = (ten, tuoi) => ({"họ và tên": ten, "hưởng thọ": tuoi});

console.log(person("Lan", 70));
