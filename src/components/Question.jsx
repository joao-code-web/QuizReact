import { useContext } from "react";
import { QuizContext } from "../context/quiz";

import Button from "./layouts/Button";

const Question = () => {
  const [quizState, dispatch] = useContext(QuizContext);

  const currentQuestion = quizState.questions[quizState.currentQuestion];

  return (
    <div id="question">
      <p>
        Pergunta {quizState.currentQuestion + 1} a {quizState.questions.length}
      </p>
      <h1>{currentQuestion.question}</h1>
      <div id="options-container">
        {currentQuestion.options.map((option, index) => (
          <p key={index}>{option}</p>
        ))}
      </div>
      <Button
        onClick={() => dispatch({ type: "CHANGE_QUESTION" })}
        text="Continuar"
      />
    </div>
  );
};

export default Question;
