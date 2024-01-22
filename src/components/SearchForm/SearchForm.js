import { useState } from "react";
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";
import "./SearchForm.css";

function SearchForm() {
  const [value, setValue] = useState("");
  const [isShortFilms, setIsShortFilms] = useState(true);

  function handleInputChange(e) {
    setValue(e.target.value); //динамическое создание свойства черезез []
  }

  function handleSubmit(e) {
    // Запрещаем браузеру переходить по адресу формы
    e.preventDefault();
    console.log("Отправлено");
  }
  return (
    <>
      <form className="search-form" onSubmit={(e) => handleSubmit(e)}>
        <input
          required
          className="search-form__input"
          type="text"
          value={value}
          onChange={(e) => handleInputChange(e)}
          placeholder="Фильм"
        ></input>
        <button type="submit" className="search-form__button"></button>
      </form>
      <FilterCheckbox isShortFilms={isShortFilms} />
    </>
  );
}

export default SearchForm;
