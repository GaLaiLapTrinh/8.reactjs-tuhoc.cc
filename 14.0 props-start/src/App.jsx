import logo from "./assets/logo-tuhoc.png";

function Header() {
  return (
    <>
      <header>
        <img src={logo} alt="Tự Học" />
        <h1>React Tuhoc.cc</h1>
        <p>
          Học React - Khám phá cách xây dựng ứng dụng linh hoạt, hiện đại, và
          đầy sáng tạo!
        </p>
      </header>
    </>
  );
}

function App() {
  return (
    <>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Khái niệm chính trong React</h2>
        </section>
      </main>
    </>
  );
}

export default App;
