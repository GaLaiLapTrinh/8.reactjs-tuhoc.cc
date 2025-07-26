import {useEffect, useState} from "react";

export default function TimeDemo() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const setTiemOutId = setTimeout(() => {
      console.log("set timeout được gọi");
      setCount((prev) => prev + 1);
    }, 3000);
    //cleanup
    return () => {
      clearTimeout(setTiemOutId);
      console.log("Đã clear timeout");
    };
  }, [count]);

  // useEffect(() => {
  //   const setIntervalId = setInterval(() => {
  //     console.log("set interval được gọi");
  //     setCount((prev) => prev + 1);
  //   }, 1000);
  //   //cleanup
  //   return () => {
  //     clearInterval(setIntervalId);
  //     console.log("Đã clear interval");
  //   };
  // }, []);
  return (
    <>
      <h3>Mount/ Unmount component để thử</h3>
      <p>Count: {count}</p>
    </>
  );
}
