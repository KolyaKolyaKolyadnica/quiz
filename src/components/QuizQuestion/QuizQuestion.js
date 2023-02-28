import { useState } from "react";
import Modal from "../Modal";
import style from "./QuizQuestion.module.css";

function QuizQuestion({ point, showScore }) {
  const [status, setStatus] = useState("cost");
  const [showModal, setShowModal] = useState(true);

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
      <>
        <td>
          <div className={style.question}>{question}</div>
        </td>

        <Modal onClose={() => alert("Тицьни на кнопку 'Дізнатись відповідь'")}>
          <div className={style.container}>
            <p className={style.textMain}>{question}</p>
            <button className={style.btn} onClick={() => setStatus("answer")}>
              Дізнатись відповідь
            </button>
          </div>
        </Modal>
      </>
    );
  }

  if (status === "answer") {
    return (
      <>
        <td>
          <div className={style.answer}>
            <span>Пройдено</span>
          </div>
        </td>

        {showModal && (
          <Modal onClose={() => alert("Тицьни на кнопку 'Зарахувати бали'")}>
            <div className={style.container}>
              <p className={style.textMain}>
                <span className={style.textComment}>Відповідь:</span>
                {answer}
              </p>
              <button
                className={style.btn}
                onClick={() => {
                  showScore({ question, cost });
                  setShowModal(false);
                }}
              >
                Зарахувати бали.
              </button>
            </div>
          </Modal>
        )}
      </>
    );
  }
}

export default QuizQuestion;
