import { Link } from "react-router-dom";

import "./Navigation.css";

function Navigation() {
  return (
    <>
      <div className="navigation">
        <Link className="navigation__button navigation__link" to={"./movies"}>
          {"Фильмы"}
        </Link>
        <Link
          className="navigation__button navigation__link"
          to={"./saved-movies"}
        >
          {"Сохраненние фильмы"}
        </Link>
      </div>

      <Link
        className="navigation__button navigation__btn-account"
        to={"./profile"}
      >
        {"Аккаунт"}
      </Link>
    </>
  );
}

export default Navigation;
