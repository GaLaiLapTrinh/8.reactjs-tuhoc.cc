//1. spread operator với mảng
// Danh sách sở thích hiện tại
let soThich = ["đọc sách", "nghe nhạc"];

// Sở thích mới muốn thêm
const soThichMoi = ["Đi du lịch", "xem phim"];
// Cập nhật danh sách sở thích

soThich = [...soThich, "abc", ...soThichMoi];
console.log("Danh sách sở thích sau khi thêm: ", soThich);

//2. spread operator với object
// Thông tin người dùng ban đầu
let user = {
  id: 1,
  name: "Nguyễn Văn A",
  email: "vana@gmail.com",
  role: "member",
};

// Thông tin cần cập nhật
const updates = {
  address: "123 Đường ABC",
  role: "Admin",
};

// Cập nhật thông tin người dùng
user = {...updates, ...user};

console.log(user);
