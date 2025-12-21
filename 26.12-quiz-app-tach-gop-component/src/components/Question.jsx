import QuestionTimer from "./QuestionTimer.jsx";
import Answers from "./Answers.jsx";

export default function Question({
  questionText,
  answers,
  selectedAnswer,
  answerState,
  onSelectAnswer,
  onSkipAnswer,
}) {
  return (
    <>
      <div id="question">
        <QuestionTimer timeout={10000} onTimeout={onSkipAnswer} />

        <h2>{questionText}</h2>
        <Answers
          answers={answers}
          selectedAnswer={selectedAnswer}
          answerState={answerState}
          onSelect={onSelectAnswer}
        />
      </div>
    </>
  );
}
