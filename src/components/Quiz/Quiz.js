import QuizCategory from "../QuizCategory";

function Quiz({ categories, showScore }) {
  return (
    <table>
      <tbody>
        {categories.map((category) => {
          return (
            <tr key={category.name}>
              <th>{category.name}</th>
              <QuizCategory category={category} showScore={showScore} />
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

export default Quiz;
