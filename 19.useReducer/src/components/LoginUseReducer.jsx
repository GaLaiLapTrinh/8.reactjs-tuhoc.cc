//Step 1: import useReducer
import {useReducer} from "react";

//step 2: Khởi tạo giá trị ban đầu
const initState = false;

//Step 3: khai báo action
const LOGIN = "login";
const LOGOUT = "logout";

//Step 4: khai báo function reducer ( sẽ làm gì với từng action)
function reducerLogin(state, action) {
  switch (action) {
    case LOGIN:
      return true;
    case LOGOUT:
      return false;
    default:
      throw new Error("Action không hợp lệ");
  }
}

export default function LoginUseReducer() {
  // const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoggedIn, dispatch] = useReducer(reducerLogin, initState);
  return (
    <div>
      <h2>{isLoggedIn ? "Chào mừng xxx" : "Bạn chưa đăng nhập"}</h2>
      <button onClick={() => dispatch(LOGIN)}>Đăng nhập</button>
      <button onClick={() => dispatch(LOGOUT)}>Đăng xuất</button>
    </div>
  );
}
