import "./FilterCheckbox.css";

function FilterCheckbox({ isShortFilms, onCheckboxClick }) {
  return (
    <section className="filter-checkbox" onClick={onCheckboxClick}>
      <div
        className={`filter-checkbox__checkbox ${isShortFilms ? "" : "short"}`}
      />
      <h3 className="filter-checkbox__title">Короткометражки</h3>
    </section>
  );
}

export default FilterCheckbox;
