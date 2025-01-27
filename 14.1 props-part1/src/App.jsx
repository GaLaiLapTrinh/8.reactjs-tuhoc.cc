import PropTypes from "prop-types";

import logo from "./assets/logo-tuhoc.png";

import pic1 from "./assets/pic1.png";
import pic2 from "./assets/pic2.png";
import pic3 from "./assets/pic3.png";
import pic4 from "./assets/pic4.png";

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

function MainContent(props) {
  return (
    <li>
      <img src={props.image} alt={props.title} />
      <h2>{props.title}</h2>
      <p>{props.desc}</p>
    </li>
  );
}

MainContent.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  desc: PropTypes.string,
};

function App() {
  return (
    <>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Khái niệm chính trong React</h2>
          <ul>
            <MainContent
              image={pic1}
              title="Components"
              desc="Khối xây dựng giao diện cơ bản - kết hợp nhiều thành phần để tạo nên ứng dụng."
            />
            <MainContent
              image={pic2}
              title="JSX"
              desc="Kết hợp HTML và JavaScript để tạo giao diện động và mạnh mẽ."
            />
            <MainContent
              image={pic3}
              title="Props"
              desc="Truyền dữ liệu vào thành phần để làm nó linh hoạt và tái sử dụng."
            />
            <MainContent
              image={pic4}
              title="State"
              desc="Dữ liệu được React quản lý, khi thay đổi sẽ tự động làm mới giao diện."
            />
          </ul>
        </section>
      </main>
    </>
  );
}

export default App;
