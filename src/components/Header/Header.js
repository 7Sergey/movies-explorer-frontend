import { Outlet, useMatch, Link } from "react-router-dom";

import "./Header.css";

function Header() {
  const href = useMatch({ path: `${window.location.pathname}`, end: false });
  const isRootHref = href.pathname.endsWith("/d");

  return (
    <>
      <header className="header">
        <div className="header__logo"></div>

        {isRootHref ? (
          <>
            <div className="header__container">
              <Link className="header__button header__link" to={"./movies"}>
                {"Фильмы"}
              </Link>
              <Link
                className="header__button header__link"
                to={"./saved-movies"}
              >
                {"Сохраненние фильмы"}
              </Link>
            </div>

            <Link
              className="header__button header__btn-account"
              to={"./profile"}
            >
              {"Аккаунт"}
            </Link>
          </>
        ) : (
          <>
            <Link className="header__button" to={"./sign-up"}>
              {"Регистрация"}
            </Link>
            <Link
              className="header__button header__btn-signin"
              to={"./sign-in"}
            >
              {"Войти"}
            </Link>
          </>
        )}
      </header>
      <Outlet />
    </>
  );
}

export default Header;
