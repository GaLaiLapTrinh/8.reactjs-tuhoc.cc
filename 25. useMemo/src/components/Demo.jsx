import {useMemo, useState} from "react";

export default function Demo({number}) {
  // Hàm tính toán nặng
  function expensiveCalculation(num) {
    console.log("Tính toán lại...");
    let result = 0;
    for (let i = 0; i <= 999; i++) {
      result += num;
    }
    return result;
  }

  // Ghi nhớ kết quả tính toán, chỉ tính lại khi number thay đổi
  // const result = expensiveCalculation(number);
  const result = useMemo(() => expensiveCalculation(number), [number]);
  const [count, setCount] = useState(0);

  return (
    <div>
      <div>Kết quả tính toán: {result}</div>
      <button onClick={() => setCount(count + 1)}>Tăng đếm: {count}</button>
    </div>
  );
}
