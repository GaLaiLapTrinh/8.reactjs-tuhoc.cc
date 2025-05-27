import {useImperativeHandle, useRef} from "react";

export default function ResultModel({result, targetTime, ref}) {
  const dialogInside = useRef();
  useImperativeHandle(ref, () => {
    return {
      open() {
        dialogInside.current.showModal();
      },
    };
  });
  return (
    <dialog ref={dialogInside} className="result-modal">
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
