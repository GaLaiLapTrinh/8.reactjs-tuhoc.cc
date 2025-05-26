export default function TimeStopper({title, targetTime}) {
  return (
    <section className="challenge">
      <h2>{title}</h2>
      <p className="challenge-time">
        {targetTime} second{targetTime > 1 ? "s" : ""}
      </p>
      <button>Start</button>
      <p className="">Time is running... / Timer inactive</p>
    </section>
  );
}
