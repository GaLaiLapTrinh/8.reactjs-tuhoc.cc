import {useState, useRef} from "react";

export default function Player() {
  const playerName = useRef();
  const [enteredPlayerName, setEnteredPlayerName] = useState(null);

  function handleClick() {
    setEnteredPlayerName(playerName.current.value);
  }

  return (
    <section id="player">
      <h2>Welcome {enteredPlayerName ?? "Noname"} </h2>
      <div>
        <input type="text" ref={playerName} />
        <button onClick={handleClick}>Set Name</button>
      </div>
    </section>
  );
}
