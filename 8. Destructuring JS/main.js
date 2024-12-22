/*
1. Destructuring là gì?
Destructuring là một tính năng quan trọng, 
cho phép bạn trích xuất dữ liệu từ arrays hoặc objects một cách dễ dàng và ngắn gọn. 
Với Array: Trích xuất dữ liệu dựa trên vị trí (index).
Với Object: Trích xuất dữ liệu dựa trên tên thuộc tính (property name).
*/

//2. Destructuring Arrays
//giả sử chúng ta có một mảng như sau:
const userName = ["Toàn", "Hà", "Huy"];
//Nếu muốn lấy ra các phần tử trong mảng trên, chúng ta sẽ làm như sau:
const user1 = userName[0];
const user2 = userName[1];
const user3 = userName[2];
console.log(user1, user2, user3);
//Nhưng nếu sử dụng destructuring, chúng ta sẽ viết ngắn gọn hơn như sau:
const [user4, user5, user6] = userName;
console.log(user4, user5, user6);

//2.2 Có thể bỏ qua phần tử không cần thiết bằng cách để dấu phẩy:
const [, , user8] = userName;
console.log(user8);

//2.3 Destructuring với giá trị mặc định:
const [user9, user10, user11, user12 = "default Name"] = userName;
console.log(user12);

//2.4 Destructuring với rest parameter:
const [user13, user14, user15, user16, ...rest] = userName;
console.log(user13);
console.log(user16);
console.log(rest);

//3. Destructuring Objects
//Giả sử chúng ta có một object như sau:

const user = {
  name: "Toàn",
  age: 20,
};

//Nếu muốn lấy ra các thuộc tính trong object trên, chúng ta sẽ làm như sau:
const ten = user.name;
const tuoi = user.age;
console.log(ten);
console.log(tuoi);

//Nhưng nếu sử dụng destructuring, chúng ta sẽ viết ngắn gọn hơn như sau:
// Lưu ý: Tên biến phải trùng với tên thuộc tính trong object
const {name, age} = user;
console.log(name);
console.log(age);

//3.2 Đổi tên biến khi destructuring:
const {name: ten1, age: tuoi1} = user;
console.log(ten1);
console.log(tuoi1);

//3.3 Destructuring với giá trị mặc định:
const {name: ten2, age: tuoi2, gioitinh = "Chưa khai báo"} = user;
console.log(ten2);
console.log(tuoi2);
console.log(gioitinh);

//3.4 Destructuring với rest parameter:
const {name: ten3, age: tuoi3, ...rest1} = user;
console.log(ten3);
console.log(tuoi3);
console.log(rest1);
