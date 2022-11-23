// import { useState } from "react";

function Score({ costOfQuestion, players, playersScore, increasePlayerScore }) {
  return (
    <div>
      {costOfQuestion ? (
        <>
          <h2>Хто ж відповів вірно?</h2>
          <ul>
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
          <ul>
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
