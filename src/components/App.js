import { useState } from "react";
import "./App.css";

import series from "../data/series.json";
import default01 from "../data/default01.json";
import GameList from "./GameList";
import PlayingField from "../pages/PlayingField";
import Modal from "./Modal";
import PlayersController from "./PlayersController";
import FlyingBalls from "./FlyingBalls/FlyingBalls";
import { useDispatch, useSelector } from "react-redux";

import playersActions from "../redux/actions";

const pages = {
  MENU: "menu",
  CREATE: "create",
  PLAY: "play",
};

function App() {
  const [games, setGames] = useState([default01, series]);
  const [chosenGame, setChosenGame] = useState(null);
  const [page, setPage] = useState(pages.MENU);
  const [showModal, setShowModal] = useState(false);

  const [showGameList, setShowGameList] = useState(false);
  const [showPlayersController, setShowPlayersController] = useState(false);

  const players = useSelector((state) => state.playersList.players);

  const dispatch = useDispatch();

  const getGameByIndex = (e) => {
    setChosenGame(games[e.target.dataset.gameIndex]);

    setShowPlayersController(true);
    setShowGameList(false);
  };

  const choseGame = () => {
    setShowModal(!showModal);
    setShowGameList(true);
  };
  const startGame = () => {
    if (players.length === 0) {
      alert("Ну хочаб одного гравця введи :(");
      return;
    }
    setPage(pages.PLAY);

    setShowPlayersController(false);
    setShowModal(!showModal);

    dispatch(playersActions.createStartScore(players));
  };

  const closeModal = () => {
    setShowModal(!showModal);

    setShowPlayersController(false);
    setShowGameList(false);
  };

  const arr = [1, 2, 3, 4, 5];

  if (page === pages.MENU) {
    return (
      <>
        {!showModal && (
          <>
            <div className="startMenuContainer">
              <button className="menuBtn" onClick={() => choseGame()}>
                Обрати гру
              </button>
              {/* <button className=" menuBtn" onClick={() => choseGame()} disabled>
                Створити гру (coming...)
              </button> */}
            </div>

            <FlyingBalls />
          </>
        )}

        {showModal && (
          <Modal onClose={closeModal}>
            {showGameList && (
              <GameList games={games} choseGame={getGameByIndex} />
            )}

            {showPlayersController && (
              <PlayersController onClickStartGame={() => startGame()} />
            )}
          </Modal>
        )}
      </>
    );
  }

  if (page === pages.PLAY) {
    return (
      <>
        <PlayingField
          game={chosenGame}
          backToMenu={() => setPage(pages.MENU)}
          players={players}
        />
      </>
    );
  }
}

export default App;
