export default function ResultModel({result, targetTime, ref}) {
  return (
    <dialog ref={ref} className="result-modal">
      <h2>You {result}</h2>
      <p>
        Thời gian đích: <strong>{targetTime} second</strong>
      </p>
      <p>
        Bạn còn <strong>X second</strong>
      </p>
      <form method="dialog">
        <button>Close</button>
      </form>
    </dialog>
  );
}
