import { useState } from "react";
import style from "./QuizQuestion.module.css";

function QuizQuestion({ point, showScore }) {
  const [status, setStatus] = useState("cost");

  const { cost, question, answer } = point;

  if (status === "cost") {
    return (
      <td onClick={() => setStatus("question")}>
        <div className={style.cost}>{cost}</div>
      </td>
    );
  }
  if (status === "question") {
    return (
      <td onClick={() => setStatus("answer")}>
        <div className={style.question}>{question}</div>
      </td>
    );
  }
  if (status === "answer") {
    return (
      <td>
        <div
          className={style.answer}
          onClick={() => showScore({ question, cost })}
        >
          {answer}
        </div>
      </td>
    );
  }
}

export default QuizQuestion;
