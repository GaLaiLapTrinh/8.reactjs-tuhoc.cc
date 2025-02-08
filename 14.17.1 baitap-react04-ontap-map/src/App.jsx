import Book from "./Book";
const myBooks = ["sách hay", "lập trình cùng tuhoc.cc", "kỹ năng sống", "sách X"];
function App() {
  return (
    <>
      <h1>Danh sách Sách yêu thích</h1>

      <ul>
        {myBooks.map((book, index) => (
          <Book title={book} key={index} />
        ))}
      </ul>
    </>
  );
}

export default App;
