import Header from "./components/Header.jsx";
import Player from "./components/Player.jsx";
import TimeStopper from "./components/TimeStopper.jsx";
function App() {
  return (
    <>
      <Header />
      <Player />
      <div id="challenges">
        <TimeStopper title={"Lever 1"} targetTime={1} />
        <TimeStopper title={"Lever 2"} targetTime={5} />
        <TimeStopper title={"Lever 3"} targetTime={10} />
        <TimeStopper title={"Lever 4"} targetTime={15} />
      </div>
    </>
  );
}

export default App;
