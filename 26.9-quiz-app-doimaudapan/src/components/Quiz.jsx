import {useCallback, useState} from "react";
import QUESTIONS from "../questions.js";
import QuizCompleteImg from "../assets/quiz-complete.png";
import QuestionTimer from "./QuestionTimer.jsx";

export default function Quiz() {
  const [userAnswers, setUserAnswers] = useState([]);
  const [answerState, setAnswerState] = useState("");
  //const activeQuestionIndex = userAnswers.length;
  const activeQuestionIndex = answerState === "" ? userAnswers.length : userAnswers.length - 1;

  //kiểm tra xem đã hết câu hỏi chưa?
  const quizComplete = activeQuestionIndex === QUESTIONS.length;

  const handleSelectAnswer = useCallback(
    function handleSelectAnswer(selectedAnswer) {
      //logic khi chọn câu trả lời xong
      setAnswerState("answered");
      setUserAnswers((prevUserAnaswers) => {
        return [...prevUserAnaswers, selectedAnswer];
      });
      //set timeout
      setTimeout(() => {
        //so sánh câu trả lời của người dùng với đáp án(index 0 trong mảng)
        if (selectedAnswer === QUESTIONS[activeQuestionIndex].answers[0]) {
          setAnswerState("correct");
        } else {
          setAnswerState("wrong");
        }

        setTimeout(() => {
          setAnswerState("");
        }, 2000);
      }, 1000);
    },
    [activeQuestionIndex]
  );

  const handleSkipAnswer = useCallback(() => {
    handleSelectAnswer(null);
  }, [handleSelectAnswer]);

  if (quizComplete) {
    return (
      <div id="summary">
        <img src={QuizCompleteImg} />
        <h2>Quiz Completed!</h2>
      </div>
    );
  }

  // thuật toán Fisher–Yates Shuffle
  function shuffleArray(array) {
    for (let i = array.length - 1; i >= 1; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  //tạo bản sao mảng gốc 0 để xáo trộn (0 làm thay đổi mảng gốc) -
  const shuffledAnswers = [...QUESTIONS[activeQuestionIndex].answers];
  shuffleArray(shuffledAnswers);

  return (
    <>
      <div id="quiz">
        <div id="question">
          <QuestionTimer key={activeQuestionIndex} timeout={10000} onTimeout={handleSkipAnswer} />
          <h2>{QUESTIONS[activeQuestionIndex].text}</h2>

          <ul id="answers">
            {/* {QUESTIONS[activeQuestionIndex].answers.map((answer) => ( */}
            {shuffledAnswers.map((answer) => {
              const isSelected = userAnswers[userAnswers.length - 1] === answer;
              let cssClass = "";

              if (answerState === "answered" && isSelected) {
                cssClass = "selected";
              }

              if ((answerState === "correct" || answerState === "wrong") && isSelected) {
                cssClass = answerState;
              }
              return (
                <li key={answer} className="answer">
                  <button className={cssClass} onClick={() => handleSelectAnswer(answer)}>
                    {answer}
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </>
  );
}
