import { Outlet, useMatch, Link } from "react-router-dom";

import "./Header.css";
import Navigation from "../Navigation/Navigation";

function Header({ isLoggedIn }) {
  // const href = useMatch({ path: `${window.location.pathname}`, end: false });
  // const isRootHref = href.pathname.endsWith("/");

  return (
    <>
      <header className="header">
        <Link className="header__logo" to={"../"}></Link>

        {isLoggedIn ? (
          <Navigation />
        ) : (
          <div>
            <Link className="header__button header__btn-signup" to={"./signup"}>
              {"Регистрация"}
            </Link>
            <Link className="header__button header__btn-signin" to={"./signin"}>
              {"Войти"}
            </Link>
          </div>
        )}
      </header>
      <Outlet />
    </>
  );
}

export default Header;
