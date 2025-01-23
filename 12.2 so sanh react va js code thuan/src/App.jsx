import "./App.css";

function Header() {
  return (
    <>
      <h2>Chào mừng đến với thế giới React!</h2>
      <p>
        Hôm nay là <strong>22/1/2024</strong>. Thời gian hiện tại{" "}
        <strong>19:00</strong>
      </p>
    </>
  );
}

function App() {
  return (
    <>
      <h1>Đây là tiêu đề</h1>
      <p>Lorem ipsum dolor sit.</p>

      <Header></Header>
      <Header />

    </>
  );
}

export default App;
