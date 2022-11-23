import { Component } from "react";
import "./App.css";

import december25 from "../data/december25.json";
import GameList from "./GameList";
import PlayingField from "./PlayingField";

const pages = {
  MENU: "menu",
  CREATE: "create",
  PLAY: "play",
};

class App extends Component {
  state = {
    games: [
      december25,
      {
        name: "dasads",
      },
    ],

    chosenGame: null,

    page: pages.MENU,
  };

  getGameByIndex = (e) => {
    const chosenGame = this.state.games[e.target.dataset.gameIndex];

    this.setState({ chosenGame, page: pages.PLAY });
  };
  showMenuPage = () => {
    this.setState({ page: pages.MENU });
  };

  render() {
    const { games, chosenGame, page } = this.state;

    if (page === "menu") {
      return (
        <>
          <div>Обрати гру</div>
          <div>Створити гру</div>

          <GameList games={games} choseGame={this.getGameByIndex} />
        </>
      );
    }

    if (page === "play") {
      return (
        <>
          <PlayingField games={chosenGame} backToMenu={this.showMenuPage} />
        </>
      );
    }
  }
}

export default App;
