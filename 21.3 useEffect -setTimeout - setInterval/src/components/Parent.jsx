import {useState} from "react";
import TimeDemo from "./TimeDemo";

export default function Parent() {
  const [show, setShow] = useState(true);
  return (
    <>
      <button onClick={() => setShow((s) => !s)}> {show ? "Ẩn component" : "Hiện component"}</button>
      {show && <TimeDemo />}
    </>
  );
}
