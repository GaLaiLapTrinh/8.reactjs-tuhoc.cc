import {useState} from "react";
import Child from "./Child";

// Component con
// const Child = memo(function ({value}) {
//   console.log("Child render"); // Theo dõi lần render
//   return <div>Giá trị từ cha: {value}</div>;
// });

// Component cha
function Parent() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Tăng Cha</button>
      <div>Giá trị đếm của cha: {count}</div>
      <Child value={count} />
    </div>
  );
}

export default Parent;
