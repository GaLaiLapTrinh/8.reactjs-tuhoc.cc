import {useEffect, useState} from "react";

export default function DemoNoDeps() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("useEffect chạy sau mỗi lần render");
    {
      console.log("Bắt đầu fetch");
    }
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => console.log(data));
    {
      console.log("Chương trình đã chạy qua fetch");
    }
  });

  return (
    <>
      <h3>Không truyền dependency</h3>
      <button onClick={() => setCount(count + 1)}>Tăng</button>
      <p>Giá trị : {count}</p>
      {console.log("Render lại giao diện")}
    </>
  );
}
