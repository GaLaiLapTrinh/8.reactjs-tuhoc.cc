import {useState} from "react";
import "./App.css";

function App() {
  const [greeting, setGreeting] = useState("Chào bạn!");

  function updateGreeting() {
    // setGreeting("lời chào mới");
    // const currentHour = new Date().getHours();
    const currentHour = 18;
    console.log(currentHour);
    if (currentHour >= 5 && currentHour < 12) {
      setGreeting("Chào buổi sáng!");
    } else if (currentHour >= 12 && currentHour < 18) {
      setGreeting("Chào buổi chiều!");
    } else {
      setGreeting("Chào buổi tối!");
    }
  }

  return (
    <>
      <p>{greeting}</p>
      <button onClick={updateGreeting}>Cập nhật lời chào</button>
    </>
  );
}

export default App;
