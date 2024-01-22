import { Link } from "react-router-dom";
import { useState } from "react";

import "./Navigation.css";
import BurgerMenu from "../BurgerMenu/BurgerMenu";

function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  // ${isOpen ? "open" : ""}
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <BurgerMenu onClick={toggleMenu} isOpen={isOpen} />
      <div className="navigation">
        <Link className={`navigation__button navigation__link`} to={"./movies"}>
          {"Фильмы"}
        </Link>
        <Link
          className={`navigation__button navigation__link`}
          to={"./saved-movies"}
        >
          {"Сохраненние фильмы"}
        </Link>
      </div>

      <Link
        className={`navigation__button navigation__btn-account`}
        to={"./profile"}
      >
        {"Аккаунт"}
      </Link>
    </>
  );
}

export default Navigation;
