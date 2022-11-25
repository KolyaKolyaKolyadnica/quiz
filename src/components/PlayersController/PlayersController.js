import { useState, useEffect } from "react";
import style from "./PlayersController.module.css";

export default function PlayersController({ onChangeForm }) {
  const [players, setPlayers] = useState([]);
  const [value, setValue] = useState("");

  const addNewPlayer = (e) => {
    e.preventDefault();

    setPlayers((prevPlayers) => [...prevPlayers, e.target.children[0].value]);
    setValue("");
  };

  useEffect(() => {
    onChangeForm(players);
  }, [players, onChangeForm]);

  return (
    <div className={style.container}>
      <h2 className={style.title}>Запиши по черзі усіх гравців.</h2>
      <form onSubmit={addNewPlayer} className={style.form}>
        <input
          type="text"
          placeholder="Введіть ім'я..."
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <button>Додати ігрока</button>
      </form>

      <ul className={style.list}>
        {players.map((player) => (
          <li key={player}>{player}</li>
        ))}
      </ul>
    </div>
  );
}
