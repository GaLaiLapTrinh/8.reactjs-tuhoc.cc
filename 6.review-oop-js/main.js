/*
1. Objects là gì?
Objects trong JavaScript được sử dụng để nhóm các giá trị lại với nhau. 
Chúng cho phép tổ chức dữ liệu dưới dạng các cặp key-value, 
trong đó key là tên thuộc tính và value là giá trị tương ứng.
*/

const user = {
  //thuộc tính
  name: "Lan",
  age: 70,
  "giới tính": "Nam",

  //phương thức
  xinChao() {
    console.log("Xin chào bạn");
    console.log(this.age);
    return 1;
  },
};

console.log(user);
console.log(user.name);
console.log(user.age);
console.log(user["giới tính"]);

console.log(user.xinChao());

//class
class User {
  constructor(name, age) {
    (this.name = name), (this.age = age);
  }

  //phương thức
  xinChao() {
    console.log("Xin chào bạn");
    console.log(this.age);
    return 1;
  }
}

const user1 = new User("Nam", 60);
console.log(user1.name);
console.log(user1.age);

const user2 = new User("Trung", 70);
console.log(user2.name);
console.log(user2.age);
console.log(user2.xinChao());
