import { useState, useEffect } from "react";
import Modal from "../Modal";
import PlayersController from "../PlayersController";
import Quiz from "../Quiz/Quiz";
import Navigation from "../Navigation/Navigation";
import Score from "../Score";
import style from "./PlayingField.module.css";

function PlayingField({ games, backToMenu }) {
  const { name, categories } = games;
  const [playersControllerModal, setPlayersControllerModal] = useState(false);
  const [players, setPlayers] = useState([]);
  const [doneQuestions, setDoneQuestions] = useState([]);
  const [playersScoreModal, setPlayersScoreModal] = useState(false);
  const [playersScore, setPlayersScore] = useState([]);
  const [costOfQuestion, setCostOfQuestion] = useState();

  useEffect(() => {
    setPlayersScore(players.map(() => 0));
  }, [players]);

  const getPlayersList = (playersArr) => {
    setPlayers(playersArr);
  };

  const showScore = ({ question, cost }) => {
    setPlayersScoreModal(!playersScoreModal);
    setCostOfQuestion(null);

    if (doneQuestions.includes(question)) {
      return;
    }

    setDoneQuestions((prevQuestion) => [...prevQuestion, question]);
    setCostOfQuestion(cost);
  };

  const increasePlayerScore = (costOfQuestion, playerScoreIncreaseIndex) => {
    console.log("das");

    setPlayersScore(
      playersScore.map((playerScore, index) => {
        if (playerScoreIncreaseIndex === index) {
          return playerScore + costOfQuestion;
        }

        return playerScore;
      })
    );

    setPlayersScoreModal(!playersScoreModal);
  };

  return (
    <div className={style.container}>
      <Navigation
        name={name}
        backToMenu={backToMenu}
        createPlayersList={() =>
          setPlayersControllerModal(!playersControllerModal)
        }
      />

      <Quiz categories={categories} showScore={showScore} />

      {playersControllerModal && (
        <Modal
          onClose={() => setPlayersControllerModal(!playersControllerModal)}
        >
          <PlayersController onChangeForm={getPlayersList} />
        </Modal>
      )}

      {playersScoreModal && (
        <Modal onClose={() => setPlayersScoreModal(!playersScoreModal)}>
          <Score
            costOfQuestion={costOfQuestion}
            players={players}
            playersScore={playersScore}
            increasePlayerScore={increasePlayerScore}
          />
        </Modal>
      )}
    </div>
  );
}

export default PlayingField;
