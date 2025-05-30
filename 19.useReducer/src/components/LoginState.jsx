import {useState} from "react";

export default function LoginState() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div>
      <h2>{isLoggedIn ? "Chào mừng xxx" : "Bạn chưa đăng nhập"}</h2>
      <button onClick={() => setIsLoggedIn(true)}>Đăng nhập</button>
      <button onClick={() => setIsLoggedIn(false)}>Đăng xuất</button>
    </div>
  );
}
