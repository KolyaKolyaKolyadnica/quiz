import style from "./Score.module.css";

function Score({ costOfQuestion, players, playersScore, increasePlayerScore }) {
  return (
    <div className={style.container}>
      {costOfQuestion ? (
        <>
          <h2 className={style.title}>Хто ж відповів вірно?</h2>
          <ul className={style.list}>
            {players.map((player, index) => (
              <li
                key={player}
                onClick={() => increasePlayerScore(costOfQuestion, index)}
              >
                {player} : {playersScore[index]} балів +{costOfQuestion}
              </li>
            ))}
          </ul>
        </>
      ) : (
        <>
          <h2>Кількість балів у гравців.</h2>
          <ul className={style.list}>
            {players.map((player, index) => (
              <li key={player}>
                {player} : {playersScore[index]} балів
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
}

export default Score;
