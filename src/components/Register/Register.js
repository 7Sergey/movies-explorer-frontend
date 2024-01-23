import { useState } from "react";
import "./Register.css";
import { Link } from "react-router-dom";

function Register() {
  const [data, setData] = useState({
    userName: "",
    userEmail: "",
    userPassword: "",
  });
  function handleInputChange(e, name) {
    setData({ ...data, [name]: e.target.value }); //динамическое создание свойства черезез []
  }
  return (
    <section className="register">
      <form className="register__form">
        <div className="register__header">
          <div className="register__logo" />
          <h2 className="register__title">Добро пожаловать!</h2>
        </div>
        <div className="register__container">
          <span className="register__span">Имя</span>
          <input
            required
            className="register__input register__input_name"
            onChange={(e) => handleInputChange(e, "userName")}
          ></input>
        </div>
        <div className="register__container">
          <span className="register__span">E-mail</span>
          <input
            required
            className="register__input register__input_email"
            onChange={(e) => handleInputChange(e, "userEmail")}
          ></input>
        </div>
        <div className="register__container">
          <span className="register__span">Пароль</span>
          <input
            required
            type="password"
            className="register__input register__input_password"
            onChange={(e) => handleInputChange(e, "userPassword")}
          ></input>
        </div>
        <button className="register__button">Зарегистрироваться</button>
      </form>
      <div className="register__link-container">
        <p className="register__link-paragraph">Уже зарегистрированы?</p>
        <Link className="register__link" to="../signin">
          Войти
        </Link>
      </div>
    </section>
  );
}

export default Register;
