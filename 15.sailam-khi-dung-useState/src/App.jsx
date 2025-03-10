import {useState} from "react";
import "./App.css";

function App() {
  console.log("App được gọi");
  const [count, setCount] = useState(0);

  const handleClick = () => {
    // setCount(count + 1);
    // setCount(count + 1);
    // setCount(count + 1);

    setCount((a) => a + 1);
    setCount((a) => a + 1);
    setCount((a) => a + 1);
    console.log(count);
  };
  return (
    <>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={handleClick}>count is {count}</button>
      </div>
    </>
  );
}

export default App;
