/*
array (mảng) là một dạng đặc biệt của object,
được thiết kế để lưu trữ các giá trị theo thứ tự và truy cập bằng chỉ số (index),  bắt đầu từ 0
*/

// 1. Tạo mảng: Mảng được tạo bằng cặp dấu ngoặc vuông []
//  (ngoài ra còn có cách tạo bằng constructor, tham khảo series cơ bản)

const traiCay = ["cam", "xoai", "nho", "tao", "cam"];
console.log(typeof traiCay);
console.log(traiCay);
//truy cập các  phần tử của màng
console.log(traiCay[0]);
console.log(traiCay[1]);
console.log(traiCay[2]);

//2. Mảng lồng nhau và kiểu dữ liệu trong mảng
//Mảng có thể chứa bất kỳ loại dữ liệu nào, bao gồm chuỗi,
// số, đối tượng, hoặc thậm chí các mảng khác...
const mang = [1, "hello", true, null, undefined, [1, 2, 3]];
//2.1 truy câp phần tử trong mảng lồng nhau
console.log(mang[5][0]);
console.log(mang[5][1]);

//3. Một số phương thức thường dùng
//3.1 push(): thêm phần tử vào cuối mảng
traiCay.push("dua");
console.log(traiCay);

//3.2 map():(map sẽ duyệt qua từng phần tử của mảng) tạo mảng mới từ mảng cũ
const so = [1, 2, 3, 4, 5];
console.log(so);
const so2 = so.map((item) => item * 2);
console.log(so2);

//biến đổi phần tử của mảng thành đối tượng mới
const so3 = so.map((item) => ({so: item}));
console.log(so3);

//3.3  findIndex
const kq = traiCay.findIndex((item) => {
  return item === "cam";
});
console.log(kq);
