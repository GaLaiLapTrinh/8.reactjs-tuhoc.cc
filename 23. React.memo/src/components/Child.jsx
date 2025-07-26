import {memo} from "react";

// function Child({value}) {
//   console.log("Child render"); // Theo dõi lần render
//   return <div>Giá trị từ cha: {value}</div>;
// }

// export default memo(Child);

//Cách 2
export default memo(function Child({value}) {
  console.log("Child render"); // Theo dõi lần render
  return <div>Giá trị từ cha: {value}</div>;
});
