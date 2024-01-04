import { Outlet, useMatch, Link } from "react-router-dom";

import "./Header.css";

function Header() {
  const href = useMatch({ path: `${window.location.pathname}`, end: false });
  const isRootHref = href.pathname.endsWith("/");

  return (
    <>
      <header className="header">
        <div className="header__logo"></div>

        {isRootHref ? (
          <>
            <div>
              <div>Фильмы</div>
              <div>Сохраненные фильмы</div>
            </div>

            <Link className="header__button" to={"./profile"}>
              {"Profile"}
            </Link>
          </>
        ) : (
          <>
            <Link className="header__button" to={"./sign-up"}>
              {"Регистрация"}
            </Link>
            <Link className="header__button" to={"./sign-in"}>
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
