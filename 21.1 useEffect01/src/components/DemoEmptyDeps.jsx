import {useEffect, useState} from "react";

export default function DemoEmptyDeps() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("useEffect chạy sau mỗi lần render");
  }, []);
  return (
    <>
      <h3>Không truyền dependency</h3>
      <button onClick={() => setCount(count + 1)}>Tăng</button>
      <p>Giá trị : {count}</p>
      {console.log("Render lại giao diện")}
    </>
  );
}
