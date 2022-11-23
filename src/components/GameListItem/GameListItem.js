function GameListItem({ game, choseCurrentGame, index }) {
  return (
    <li onClick={choseCurrentGame} data-game-index={index}>
      {game.name}
    </li>
  );
}

export default GameListItem;
