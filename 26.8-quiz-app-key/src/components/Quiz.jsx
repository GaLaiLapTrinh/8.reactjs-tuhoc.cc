import {useCallback, useState} from "react";
import QUESTIONS from "../questions.js";
import QuizCompleteImg from "../assets/quiz-complete.png";
import QuestionTimer from "./QuestionTimer.jsx";

export default function Quiz() {
  const [userAnswers, setUserAnswers] = useState([]);
  const activeQuestionIndex = userAnswers.length;

  //kiểm tra xem đã hết câu hỏi chưa?
  const quizComplete = activeQuestionIndex === QUESTIONS.length;

  const handleSelectAnswer = useCallback(function handleSelectAnswer(selectedAnswer) {
    setUserAnswers((prevUserAnaswers) => {
      return [...prevUserAnaswers, selectedAnswer];
    });
  }, []);

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
            {shuffledAnswers.map((answer) => (
              <li key={answer} className="answer">
                <button onClick={() => handleSelectAnswer(answer)}>{answer}</button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}
