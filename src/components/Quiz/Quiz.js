import QuizCategory from "../QuizCategory";
import style from "./Quiz.module.css";

function Quiz({ categories, showScore }) {
  return (
    <table>
      <tbody>
        {categories.map((category) => {
          return (
            <tr key={category.name}>
              <th className={style.category}>{category.name}</th>
              <QuizCategory category={category} showScore={showScore} />
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

export default Quiz;
