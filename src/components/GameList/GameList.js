import GameListItem from "../GameListItem";
import style from "./GameList.module.css";

function GameList({ games, choseGame }) {
  return (
    <div className={style.container}>
      <h2>Обери гру:</h2>
      <div className={style.decoration}> </div>
      <ul>
        {games.map((game, index) => (
          <GameListItem
            game={game}
            key={game.name}
            choseCurrentGame={choseGame}
            index={index}
          />
        ))}
      </ul>
    </div>
  );
}

export default GameList;
