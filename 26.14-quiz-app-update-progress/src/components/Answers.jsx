import {useRef} from "react";

export default function Answers({answers, selectedAnswer, answerState, onSelect}) {
  const shuffledAnswers = useRef();
  // thuật toán Fisher–Yates Shuffle
  function shuffleArray(array) {
    for (let i = array.length - 1; i >= 1; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }
  // chỉ shuffle 1 lần cho mỗi câu hỏi
  // các lần render sau sẽ dùng lại dữ liệu đã shuffle
  if (!shuffledAnswers.current) {
    //tạo bản sao mảng gốc 0 để xáo trộn (0 làm thay đổi mảng gốc) -
    shuffledAnswers.current = [...answers];
    shuffleArray(shuffledAnswers.current);
  }
  return (
    <>
      <ul id="answers">
        {/* {QUESTIONS[activeQuestionIndex].answers.map((answer) => ( */}
        {shuffledAnswers.current.map((answer) => {
          const isSelected = selectedAnswer === answer;
          let cssClass = "";

          if (answerState === "answered" && isSelected) {
            cssClass = "selected";
          }

          if ((answerState === "correct" || answerState === "wrong") && isSelected) {
            cssClass = answerState;
          }
          return (
            <li key={answer} className="answer">
              <button className={cssClass} onClick={() => onSelect(answer)}>
                {answer}
              </button>
            </li>
          );
        })}
      </ul>
    </>
  );
}
