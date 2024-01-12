import { useState } from "react";
import "./Profile.css";

function Profile({ name }) {
  const [data, setData] = useState({ userName: "", userEmail: "" });
  function handleInputChange(e, name) {
    setData({ ...data, [name]: e.target.value }); //динамическое создание свойства черезез []
  }
  return (
    <div className="profile">
      <h2 className="profile__title">Привет, {name}!</h2>
      <form className="profile__form">
        <div className="profile__container">
          <span className="profile__span">Имя</span>
          <input
            defaultValue={name}
            className="profile__input profile__input_name"
            onChange={(e) => handleInputChange(e, "userName")}
          ></input>
        </div>
        <div className="profile__container">
          <span className="profile__span">E-mail</span>
          <input
            className="profile__input profile__input_email"
            onChange={(e) => handleInputChange(e, "userEmail")}
          ></input>
        </div>
        <button className="profile__btn-edit">Редактировать</button>
      </form>
      <button className="profile__btn-out">Выйти из аккаунта</button>
    </div>
  );
}

export default Profile;
