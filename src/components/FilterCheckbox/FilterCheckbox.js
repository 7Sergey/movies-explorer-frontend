import "./FilterCheckbox.css";

function FilterCheckbox({ isShortFilms }) {
  return (
    <section className="filter-checkbox">
      <div
        className={`filter-checkbox__checkbox ${isShortFilms ? "short" : ""}`}
      />
      <h3 className="filter-checkbox__title">Короткометражки</h3>
    </section>
  );
}

export default FilterCheckbox;
