import {useEffect, useState} from "react";

export default function DemoWithDeps() {
  const [count, setCount] = useState(10);

  useEffect(() => {
    console.log("useEffect chạy khi count đổi: ", count);
  }, [count]);
  return (
    <>
      <h3>Không truyền dependency</h3>
      <button onClick={() => setCount(count + 0)}>Tăng</button>
      <p>Giá trị : {count}</p>
      {console.log("Render lại giao diện")}
    </>
  );
}
