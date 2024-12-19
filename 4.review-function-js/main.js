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
