import { Link } from "react-router-dom";
import "./BurgerMenu.css";

function BurgerMenu({ onClick, isOpen }) {
  return (
    <section className={"burger-menu"}>
      <div className="burger-menu__icon" onClick={() => onClick()}></div>

      <div className={`burger-menu__container ${isOpen ? "open" : ""}`}>
        <div className="burger-menu__popup">
          <button
            type="button"
            className="burger-menu__close"
            // onClick={() => onClose()}
          ></button>
          <Link className="burger-menu__link" to={"./"}>
            Главная
          </Link>
          <Link className="burger-menu__link" to={"./movies"}>
            Фильмы
          </Link>
          <Link className="burger-menu__link" to={"./saved-movies"}>
            Сохраненные фильмы
          </Link>
          <Link className={`burger-menu__btn-account`} to={"./profile"}>
            {"Аккаунт"}
          </Link>
        </div>
      </div>
    </section>
  );
}
export default BurgerMenu;
