import {useState} from "react";
export default function TimeStopper({title, targetTime}) {
  const [timerStart, setTimerStart] = useState(false);
  const [timerExpired, setTimeExpired] = useState(false);

  function handleStart() {
    setTimeout(() => {
      setTimeExpired(true);
    }, targetTime * 1000);

    setTimerStart(true);
  }

  return (
    <section className="challenge">
      <h2>{title}</h2>
      {timerExpired && <p>Bạn đã thua</p>}
      <p className="challenge-time">
        {targetTime} second{targetTime > 1 ? "s" : ""}
      </p>
      <button onClick={handleStart}>{timerStart ? "Stop" : "Start"}</button>
      <p className={timerStart ? "active" : undefined}>{timerStart ? "Time is running" : "Timer inactive"}</p>
    </section>
  );
}
