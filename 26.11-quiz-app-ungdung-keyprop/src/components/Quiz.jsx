import {useCallback, useState} from "react";
import QUESTIONS from "../questions.js";
import QuizCompleteImg from "../assets/quiz-complete.png";
import QuestionTimer from "./QuestionTimer.jsx";
import Answers from "./Answers.jsx";

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

  return (
    <>
      <div id="quiz">
        <div id="question">
          <QuestionTimer key={activeQuestionIndex} timeout={10000} onTimeout={handleSkipAnswer} />

          <h2>{QUESTIONS[activeQuestionIndex].text}</h2>

          <Answers
            key={activeQuestionIndex}
            answers={QUESTIONS[activeQuestionIndex].answers}
            selectedAnswer={userAnswers[userAnswers.length - 1]}
            answerState={answerState}
            onSelect={handleSelectAnswer}
          />
        </div>
      </div>
    </>
  );
}
