import { useState } from "react";
import "./App.css";

import december25 from "../data/december25.json";
import default01 from "../data/default01.json";
import GameList from "./GameList";
import PlayingField from "../pages/PlayingField";
import Modal from "./Modal";
import PlayersController from "./PlayersController";
import { createBall } from "../js/BallAnimation/BallAnimation";
import { useDispatch, useSelector } from "react-redux";

import playersActions from "../redux/actions";

const pages = {
  MENU: "menu",
  CREATE: "create",
  PLAY: "play",
};

function App() {
  const [games, setGames] = useState([december25, default01]);
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
              <button className="menuBtn" onClick={() => choseGame()} disabled>
                Створити гру (coming...)
              </button>
            </div>

            <div className="ballContainer">
              {arr.map((_, idx) => createBall(idx, "up"))}
              {arr.map((_, idx) => createBall(idx, "right"))}
              {arr.map((_, idx) => createBall(idx, "down"))}
              {arr.map((_, idx) => createBall(idx, "left"))}
            </div>
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
          games={chosenGame}
          backToMenu={() => setPage(pages.MENU)}
          players={players}
        />
      </>
    );
  }
}

export default App;
