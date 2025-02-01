import {useState} from "react";
import MainContent from "./components/MainContent/MainContent.jsx";
import Header from "./components/Header/Header.jsx";
import {myData, EXAMPLES} from "../data.js";
import TabButton from "./components/TabButton.jsx";

function App() {
  const [selectedTopic, setSelectedTopic] = useState();
  let tabContent = <p>Vui lòng click vào nút để lựa chọn 1 chủ đề</p>;
  if (selectedTopic) {
    tabContent = (
      <div id="tab-content">
        <h3>{EXAMPLES[selectedTopic].title}</h3>
        <p>{EXAMPLES[selectedTopic].desc}</p>
        <pre>
          <code>{EXAMPLES[selectedTopic].code}</code>
        </pre>
      </div>
    );
  }

  function handleSelect(selectedButton) {
    setSelectedTopic(selectedButton);
  }
  return (
    <>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Khái niệm chính trong React</h2>
          <ul>
            <MainContent {...myData[0]} />
            <MainContent {...myData[1]} />
            <MainContent {...myData[2]} />
            <MainContent {...myData[3]} />
          </ul>
        </section>

        <section id="examples">
          <h2>Examples</h2>
          {/* prettier-ignore */}
          <menu>
            <TabButton onSelect={()=>{handleSelect('components')}}>Components</TabButton>
            <TabButton onSelect={()=>{handleSelect('jsx')}}>JSX</TabButton>
            <TabButton onSelect={()=>{handleSelect('props')}}>Props</TabButton>
            <TabButton onSelect={()=>{handleSelect('state')}}>State</TabButton>
          </menu>

          {/* cách 1: Dùng toán tử 3 ngôi */}
          {/* {!selectedTopic ? (
            <p>Vui lòng click vào nút để lựa chọn 1 chủ đề</p>
          ) : (
            <div id="tab-content">
              <h3>{EXAMPLES[selectedTopic].title}</h3>
              <p>{EXAMPLES[selectedTopic].desc}</p>
              <pre>
                <code>{EXAMPLES[selectedTopic].code}</code>
              </pre>
            </div>
          )} */}

          {/* Cách 2: && */}
          {/* {!selectedTopic && <p>Vui lòng click vào nút để lựa chọn 1 chủ đề</p>}

          {selectedTopic && (
            <div id="tab-content">
              <h3>{EXAMPLES[selectedTopic].title}</h3>
              <p>{EXAMPLES[selectedTopic].desc}</p>
              <pre>
                <code>{EXAMPLES[selectedTopic].code}</code>
              </pre>
            </div>
          )} */}

          {/* Cách 3 */}
          {tabContent}
        </section>
      </main>
    </>
  );
}

export default App;
