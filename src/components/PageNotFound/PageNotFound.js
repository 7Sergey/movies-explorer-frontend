import React from "react";
import "./PageNotFound.css";
import { Link } from "react-router-dom";

const PageNotFound = () => {
  return (
    <section className="page-not-found">
      <h2 className="page-not-found__title">404</h2>
      <p className="page-not-found__subtitle">Страница не найдена</p>
      <Link className="page-not-found__link" to="../signin">
        Назад
      </Link>
    </section>
  );
};

export default PageNotFound;
