import {useState, useRef} from "react";

export default function Player() {
  const playerName = useRef();
  const [enteredPlayerName, setEnteredPlayerName] = useState(null);

  function handleClick() {
    setEnteredPlayerName(1212);
  }

  return (
    <section id="player">
      {/* <h2>Welcome {enteredPlayerName ?? "Noname"} </h2> */}
      <h2>Welcome {playerName.current ? playerName.current.value : "Noname"} </h2>
      <div>
        <input type="text" ref={playerName} />
        <button onClick={handleClick}>Set Name</button>
      </div>
    </section>
  );
}
