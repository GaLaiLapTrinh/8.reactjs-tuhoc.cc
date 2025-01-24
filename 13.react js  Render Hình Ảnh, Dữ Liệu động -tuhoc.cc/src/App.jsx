import "./App.css";
import demoPic from "../src/assets/img/demo.png";

let today = new Date().toLocaleDateString();
let time = new Date().toLocaleTimeString();

const wellCome = [
  "Chào mừng bạn đến với thế giới React!",
  "Rất vui được chào đón bạn đến thế giới React",
  "Chúng ta sẽ được học các kiển thực thú vị về React",
];

function ranDomTitle() {
  return Math.floor(Math.random() * wellCome.length);
}

function Header() {
  const title = wellCome[ranDomTitle()];
  return (
    <>
      <h1>{title}</h1>
      <p>
        Hôm nay là: <strong>{today}</strong>. Thời gian hiện tại{" "}
        <strong>{time}</strong>
      </p>
    </>
  );
}

const name = "Nam";
let isLogedIn = false;
let person = {
  name: "Lan",
  age: 38,
};

function DinamicValue() {
  return (
    <>
      {/*1.  dùng để chèn **biểu thức** JavaScript (expression) */}
      <h2>Chào {name}</h2>
      <p>Kết quả: {1 + 2 * 5}</p>
      {/*2.  không chèn **câu lệnh** (statement) */}
      {/* <p>{if(true) {"Đúng rồi"}}</p> */}
      {/* 3. Kết hợp với điều kiện (Toán tử Ternary) 
      JSX không hỗ trợ trực tiếp `if-else`, nhưng có thể dùng toán tử ternary bên trong
      */}

      <p>{isLogedIn ? "Bạn đã đăng nhập" : "Hãy đăng  nhập"}</p>
      {/* 4. chèn thuộc tính đối tượng */}

      <p>
        Tên: {person.name} , Tuổi : {person.age}
      </p>

      {/* 5. Chèn hình ảnh vào thẻ img*/}
      <img src={demoPic} alt="" />
    </>
  );
}

function App() {
  return (
    <>
      <Header />
      <DinamicValue />
    </>
  );
}

export default App;
