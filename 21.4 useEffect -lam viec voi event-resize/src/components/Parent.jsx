import {useState} from "react";
import ResizeEventDemo from "./ResizeEventDemo";
import KeydownEvent from "./KeydownEvent";

export default function Parent() {
  const [show, setShow] = useState(true);
  return (
    <>
      <button onClick={() => setShow((s) => !s)}> {show ? "Ẩn component" : "Hiện component"}</button>
      {/* {show && <ResizeEventDemo />} */}
      {show && <KeydownEvent />}
    </>
  );
}
