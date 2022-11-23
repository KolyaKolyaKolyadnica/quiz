import style from "./Navigation.module.css";

function Navigation({ name, backToMenu, createPlayersList }) {
  return (
    <div className={style.navigation}>
      <h1>{name}</h1>

      <button type="button" onClick={createPlayersList}>
        Додати гравців
      </button>

      <button type="button" onClick={backToMenu}>
        На головну
      </button>
    </div>
  );
}

export default Navigation;
