import { useState } from "react";
import "./Profile.css";
import { useNavigate } from "react-router-dom";

function Profile({ name, email, setIsLoggedIn }) {
  const navigate = useNavigate();

  const [data, setData] = useState({ userName: "", userEmail: "" });
  function handleInputChange(e, name) {
    setData({ ...data, [name]: e.target.value }); //динамическое создание свойства черезез []
  }
  function onClick() {
    localStorage.removeItem("token");
    navigate("/sign-in", { replace: true });
    setIsLoggedIn(false);
  }
  return (
    <section className="profile">
      <h2 className="profile__title">Привет, {name}!</h2>
      <form className="profile__form">
        <div className="profile__container">
          <span className="profile__span">Имя</span>
          <input
            required
            defaultValue={name || ""}
            className="profile__input profile__input_name"
            onChange={(e) => handleInputChange(e, "userName")}
          ></input>
        </div>
        <div className="profile__container">
          <span className="profile__span">E-mail</span>
          <input
            required
            defaultValue={email || ""}
            className="profile__input profile__input_email"
            onChange={(e) => handleInputChange(e, "userEmail")}
          ></input>
        </div>
        <button className="profile__btn-edit">Редактировать</button>
      </form>
      <button className="profile__btn-out" onClick={onClick}>
        Выйти из аккаунта
      </button>
    </section>
  );
}

export default Profile;
