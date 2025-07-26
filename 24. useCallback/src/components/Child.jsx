import {memo} from "react";

function Child({value, onButtonClick}) {
  console.log("Child render"); // Xem lần render lại
  return (
    <div>
      <div>Giá trị từ cha: {value}</div>
      <button onClick={onButtonClick}>Tăng Cha</button>
    </div>
  );
}

export default memo(Child);
