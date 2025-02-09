import {useState} from "react";
import MainContent from "./components/MainContent/MainContent.jsx";
import Header from "./components/Header/Header.jsx";
import {myData, EXAMPLES} from "../data.js";
import TabButton from "./components/TabButton.jsx";
import Section from "./components/MainContent/Section.jsx";
import Tabs from "./components/MainContent/Tabs.jsx";
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
        <Section title="Khái niệm chính trong React" id="core-concepts">
          <ul>
            {myData.map((item) => (
              <MainContent key={item.title} {...item} />
            ))}
          </ul>
        </Section>

        <Section title="Examples" id="examples" className="demo_class" moi="moi">
          {/* prettier-ignore */}
          <Tabs button={
            <>
              <TabButton
              isSelected={selectedTopic==="components"}
              onClick={()=>{handleSelect('components')}}>
              Components
            </TabButton>
            <TabButton isSelected={selectedTopic==="jsx"} onClick={()=>{handleSelect('jsx')}}>JSX</TabButton>
            <TabButton isSelected={selectedTopic==="props"} onClick={()=>{handleSelect('props')}}>Props</TabButton>
            <TabButton isSelected={selectedTopic==="state"} onClick={()=>{handleSelect('state')}}>State</TabButton></>
          }>
          {tabContent}
          </Tabs>
        </Section>
      </main>
    </>
  );
}

export default App;
