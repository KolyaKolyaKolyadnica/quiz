import style from "./GameListItem.module.css";

function GameListItem({ game, choseCurrentGame, index }) {
  return (
    <li
      onClick={choseCurrentGame}
      data-game-index={index}
      className={style.game}
    >
      {game.name}
    </li>
  );
}

export default GameListItem;
