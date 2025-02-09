import Header from "./components/Header/Header.jsx";
import MainContents from "./components/MainContent/MainContents.jsx";
import Examples from "./components/MainContent/Examples.jsx";

function App() {
  return (
    <>
      <Header />
      <main>
        <MainContents />
        <Examples />
      </main>
    </>
  );
}

export default App;
