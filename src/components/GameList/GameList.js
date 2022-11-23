import GameListItem from "../GameListItem";

function GameList({ games, choseGame }) {
  return (
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
  );
}

export default GameList;
