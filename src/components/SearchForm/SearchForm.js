import { useState } from "react";
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";
import "./SearchForm.css";

function SearchForm({ onSearch, onCheckboxClick, isShortFilms }) {
  const [value, setValue] = useState("");

  function handleInputChange(e) {
    setValue(e.target.value); //динамическое создание свойства черезез []
  }

  function handleSubmit(e) {
    // Запрещаем браузеру переходить по адресу формы
    e.preventDefault();
    onSearch(value);
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
      <FilterCheckbox
        isShortFilms={isShortFilms}
        onCheckboxClick={onCheckboxClick}
      />
    </>
  );
}

export default SearchForm;
