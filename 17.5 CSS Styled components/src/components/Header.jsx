import logo from "../assets/logo-tuhoc.png";
// import "./Header.css";
import classes from "./Header.module.css";

export default function Header() {
  return (
    <header>
      <img src={logo} alt="A canvas" />
      <h1>CSS trong React</h1>
      <p className={classes["my-paragraph"]}>Tìm hiểu về css trong react cho người mới.</p>
    </header>
  );
}
