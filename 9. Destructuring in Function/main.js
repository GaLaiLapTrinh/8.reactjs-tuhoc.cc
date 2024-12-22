//giả sử có 1 đối tượng đơn hàng
const donHang = {
  maDonHang: 101,
  tienTe: "VND",
  tongTien: 50000,
};

const donHang2 = {
  maDonHang: 105,
  tienTe: "VND",
  tongTien: 500000,
};

//1. Không sử dụng Destructuring
function xuLyDonHang(a) {
  const maDonHang = a.maDonHang;
  const tienTe = a.tienTe;
  const tongTien = a.tongTien;

  console.log(`Mã đơn hàng: ${maDonHang}`);
  console.log(`Tiền tệ: ${tienTe}`);
  console.log(`Tổng tiền: ${tongTien}`);
}

// Gọi hàm
xuLyDonHang(donHang);
xuLyDonHang(donHang2);

//2. Sử dụng Destructuring
function xuLyDonHang2({maDonHang, tienTe, tongTien}) {
  console.log(`Mã đơn hàng: ${maDonHang}`);
  console.log(`Tiền tệ: ${tienTe}`);
  console.log(`Tổng tiền: ${tongTien}`);
}

xuLyDonHang2(donHang2);

//3. Sử dụng Destructuring với giá trị mặc định
function xuLyDonHang2({maDonHang = 0, tienTe = "VND", tongTien = 0}) {
  console.log(`Mã đơn hàng: ${maDonHang}`);
  console.log(`Tiền tệ: ${tienTe}`);
  console.log(`Tổng tiền: ${tongTien}`);
}
//Gọi hàm với dữ liệu thiếu:
xuLyDonHang2({maDonHang: 102});

//4. Sử dụng Rest Parameter
function xuLyDonHang({maDonHang, ...rest}) {
  console.log(`Mã đơn hàng: ${maDonHang}`);
  console.log(rest);
}

//Gọi hàm
xuLyDonHang({
  maDonHang: 103,
  tienTe: "USD",
  tongTien: 1000,
  khachHang: "Nguyen Van A",
});

//5. sử dụng alias
function xuLyDonHang3({maDonHang: ma, ...rest}) {
  console.log(`Mã đơn hàng: ${ma}`);
  console.log(rest);
}
xuLyDonHang3({
  maDonHang: 103,
  tienTe: "USD",
  tongTien: 1000,
  khachHang: "Nguyen Van A",
});
