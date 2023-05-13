import { createContext, useContext } from "react";
import { QuizContext, QuizProvider } from "../context/quiz";

import Quiz from "../img/quiz.svg";
import Button from "./layouts/Button";

import "./Welcome.css";

const Welcome = () => {
  const [quizState, dispatch] = useContext(QuizContext);

  console.log(quizState);

  return (
    <div id="Welcome">
      <h2>Seja bem-vindo</h2>
      <p>Clique no botão abaixo para começar:</p>

      <Button
        onClick={() => dispatch({ type: "CHANGE_STATE" })}
        text="Começar"
      />
      
      <img src={Quiz} alt="Inicio do Quiz" />
    </div>
  );
};

export default Welcome;
