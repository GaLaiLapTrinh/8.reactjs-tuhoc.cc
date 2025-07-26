import {useState, useEffect, useLayoutEffect} from "react";

export default function Demo() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    //useLayoutEffect(() => {
    if (count > 2) {
      setCount(0);
    }
  }, [count]);

  const handleCount = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={handleCount}>Count</button>
    </div>
  );
}
