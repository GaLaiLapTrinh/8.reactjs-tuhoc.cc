import {useEffect} from "react";
export default function ResizeEventDemo() {
  useEffect(() => {
    // Hàm xử lý resize
    const handleResize = () => {
      if (window.innerWidth <= 800) {
        // Biểu tượng nhấn window + .
        console.log("🌟 Đạt kích thước <= 800px!");
      }
    };

    // Đăng ký event
    window.addEventListener("resize", handleResize);
    console.log("Đã add event resize!");

    // === Bỏ cleanup để demo hậu quả khi mount/unmount liên tục ===
    return () => {
      window.removeEventListener("resize", handleResize);
      console.log("Đã remove event resize!");
    };
  }, []); // chỉ mount 1 lần
  return (
    <>
      <h3>Resize cửa sổ nhỏ hơn 800px để xem console</h3>
    </>
  );
}
