import { useState } from "react";
import { IconContext } from "react-icons";
import { AiFillPlusCircle } from "react-icons/ai";
import { IoIosCloseCircle } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";

import playersActions from "../../redux/actions";
import style from "./PlayersController.module.css";

export default function PlayersController({ onClickStartGame }) {
  const [value, setValue] = useState("");

  const players = useSelector((state) => state.playersList.players);

  const dispatch = useDispatch();

  const addNewPlayer = (e) => {
    e.preventDefault();

    setValue("");

    dispatch(playersActions.addPlayer(e.target.children[0].value));
  };

  const deletePlayer = (e) => {
    dispatch(playersActions.deletePlayer(e.currentTarget.name));
  };

  return (
    <div className={style.container}>
      <h2 className={style.title}>Запиши усіх гравців.</h2>
      <form onSubmit={addNewPlayer} className={style.form}>
        <input
          type="text"
          placeholder=" Введіть ім'я..."
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <button className={`${style.btn} ${style.green}`}>
          <IconContext.Provider value={{ size: "30px" }}>
            <AiFillPlusCircle />
          </IconContext.Provider>
        </button>
      </form>

      <div className="decoration"> </div>

      <div className={style.listContainer}>
        <ol className={style.list}>
          {players.map((player, index) => (
            <li key={index} className={style.listItem}>
              <div className={style.listItemContentContainer}>
                <span>{player}</span>

                <button
                  className={`${style.btn} ${style.red}`}
                  onClick={deletePlayer}
                  name={player}
                >
                  <IconContext.Provider value={{ size: "30px" }}>
                    <IoIosCloseCircle />
                  </IconContext.Provider>
                </button>
              </div>
            </li>
          ))}
        </ol>
      </div>

      <div className="decoration"> </div>

      <button onClick={onClickStartGame} className="greenBtn">
        Поїхали!
      </button>
    </div>
  );
}
