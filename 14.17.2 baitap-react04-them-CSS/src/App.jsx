import Book from "./Book";
import "./index.css";

// Danh sách sách yêu thích
const myBooks = ["Sách Hay", "Lập Trình Cùng Tuhoc.cc", "Kỹ Năng Sống"];
export default function App() {
  return (
    <div className="container">
      <h1 className="title">Danh Sách Sách Yêu Thích</h1>
      <ul className="book-list">
        {myBooks.map((book, index) => (
          <Book key={index} title={book} />
        ))}
      </ul>
    </div>
  );
}
