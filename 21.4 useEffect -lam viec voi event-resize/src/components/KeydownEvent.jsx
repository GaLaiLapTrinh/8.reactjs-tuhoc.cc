import {useEffect} from "react";

export default function KeydownEvent() {
  useEffect(() => {
    // Hàm xử lý resize
    const handleKeyDown = (event) => {
      console.log(event);
      if (event.key) {
        // Biểu tượng nhấn window + .
        console.log("🌟 Phím được nhấn!");
      }
    };

    // Đăng ký event
    window.addEventListener("keydown", handleKeyDown);
    console.log("Đã add event keydown!");

    // === Bỏ cleanup để demo hậu quả khi mount/unmount liên tục ===
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      console.log("Đã remove event keydown!");
    };
  }, []); // chỉ mount 1 lần

  return (
    <div>
      <h3>Phím được nhấn !</h3>
    </div>
  );
}
