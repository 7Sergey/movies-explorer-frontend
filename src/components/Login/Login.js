import { useState } from "react";
import "./Login.css";
import { Link } from "react-router-dom";

function Login() {
  const [data, setData] = useState({
    userEmail: "",
    userPassword: "",
  });
  function handleInputChange(e, name) {
    setData({ ...data, [name]: e.target.value }); //динамическое создание свойства черезез []
  }
  return (
    <div className="login">
      <form className="login__form">
        <div className="login__header">
          <div className="login__logo" />
          <h2 className="login__title">Рады видеть!</h2>
        </div>

        <div className="login__container">
          <span className="login__span">E-mail</span>
          <input
            className="login__input login__input_email"
            onChange={(e) => handleInputChange(e, "userEmail")}
          ></input>
        </div>
        <div className="registelogin__container">
          <span className="login__span">Пароль</span>
          <input
            type="password"
            className="login__input register__input_password"
            onChange={(e) => handleInputChange(e, "userPassword")}
          ></input>
        </div>
        <button className="login__button">Войти</button>
      </form>
      <div className="login__link-container">
        <p className="login__link-paragraph">Ещё не зарегистрированы?</p>
        <Link className="login__link" to="../sign-up">
          Регистрация
        </Link>
      </div>
    </div>
  );
}

export default Login;
