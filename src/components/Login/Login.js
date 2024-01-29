import { useState } from "react";
import "./Login.css";
import { Link, useNavigate } from "react-router-dom";

function Login({ onLogin }) {
  const [data, setData] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  function handleInputChange(e, name) {
    setData({ ...data, [name]: e.target.value }); //динамическое создание свойства черезез []
  }
  function handleSubmit(e) {
    if (!data.email || !data.password) {
      console.error("Email и пароль обязательны");
      return;
    }
    e.preventDefault();
    onLogin(data)
      .then(() => {
        navigate("/movies");
      })
      .then(() => {
        setData({
          email: "",
          password: "",
        });
      })
      .catch(console.log);
  }

  return (
    <section className="login">
      <form className="login__form" onSubmit={handleSubmit}>
        <div className="login__header">
          <div className="login__logo" />
          <h2 className="login__title">Рады видеть!</h2>
        </div>

        <div className="login__container">
          <span className="login__span">E-mail</span>
          <input
            type="email"
            className="login__input login__input_email"
            onChange={(e) => handleInputChange(e, "email")}
            required
          ></input>
        </div>
        <div className="registelogin__container">
          <span className="login__span">Пароль</span>
          <input
            type="password"
            className="login__input register__input_password"
            onChange={(e) => handleInputChange(e, "password")}
            required
          ></input>
        </div>
        <button className="login__button">Войти</button>
      </form>
      <div className="login__link-container">
        <p className="login__link-paragraph">Ещё не зарегистрированы?</p>
        <Link className="login__link" to="../signup">
          Регистрация
        </Link>
      </div>
    </section>
  );
}

export default Login;
