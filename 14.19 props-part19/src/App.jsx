import {useState} from "react";
import MainContent from "./components/MainContent/MainContent.jsx";
import Header from "./components/Header/Header.jsx";
import {myData, EXAMPLES} from "../data.js";
import TabButton from "./components/TabButton.jsx";
import Section from "./components/MainContent/Section.jsx";

function App() {
  const kq = myData.map((item) => ({...item}));

  console.log(kq);
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
            {myData.map((item) => (
              <MainContent key={item.title} {...item} />
            ))}
          </ul>
        </section>

        <Section title="Examples" id="examples" className="demo_class" moi="moi">
          {/* prettier-ignore */}
          <menu>
            <TabButton
              isSelected={selectedTopic==="components"}
              onClick={()=>{handleSelect('components')}}>
              Components
            </TabButton>
            <TabButton isSelected={selectedTopic==="jsx"} onClick={()=>{handleSelect('jsx')}}>JSX</TabButton>
            <TabButton isSelected={selectedTopic==="props"} onClick={()=>{handleSelect('props')}}>Props</TabButton>
            <TabButton isSelected={selectedTopic==="state"} onClick={()=>{handleSelect('state')}}>State</TabButton>
          </menu>
          {tabContent}
        </Section>
      </main>
    </>
  );
}

export default App;
