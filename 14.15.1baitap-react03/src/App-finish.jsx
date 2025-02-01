import {useState} from "react";

//bài tập 03 khoá học react js tại https://tuhoc.cc
export default function App() {
  const [isActive, setIsActive] = useState(false);

  function handleToggle() {
    setIsActive((prev) => !prev);
  }

  return (
    <div className="container">
      <p className={isActive ? "active" : undefined}>Click vào em!</p>
      <button onClick={handleToggle}>Toggle btn</button>
    </div>
  );
}
