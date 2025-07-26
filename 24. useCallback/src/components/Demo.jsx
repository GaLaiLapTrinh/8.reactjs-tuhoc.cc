import React, {useCallback, useState} from "react";
import Child from "./Child.jsx";

function Parent() {
  const [count, setCount] = useState(0);

  // const handleIncrease = () => {
  //   setCount((prev) => prev + 1);
  // };

  //useCallback
  const handleIncrease = useCallback(() => {
    setCount((prev) => prev + 1);
  }, []);

  return (
    <div>
      <div>Giá trị đếm của cha: {count}</div>
      <Child value={1} onButtonClick={handleIncrease} />
    </div>
  );
}

export default Parent;
