import { useDispatch, useSelector } from "react-redux";
import playersActions from "../../redux/actions";
import style from "./ScoreEdit.module.css";

function ScoreEdit({ costOfQuestion, winnerWasChosen }) {
  const players = useSelector((state) => state.playersList.players);
  const score = useSelector((state) => state.playersList.score);

  const dispatch = useDispatch();

  const changeScore = (costOfQuestion, playerIndex) => {
    dispatch(playersActions.increasePlayerScore(costOfQuestion, playerIndex));
    winnerWasChosen();
  };

  return (
    <div className={style.container}>
      <h2 className={style.title}>Хто ж відповів вірно?</h2>

      <div className={style.decoration}> </div>
      <ul className={style.list}>
        {players.map((player, index) => (
          <li
            key={player}
            onClick={() => changeScore(costOfQuestion, index)}
            className={style.listItem}
          >
            <span>
              {player} : {score[index]} балів
            </span>
            + {costOfQuestion}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ScoreEdit;
