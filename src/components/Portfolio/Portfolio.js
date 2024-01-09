import "./Portfolio.css";

function Portfolio() {
  return (
    <div className="portfolio">
      <h2 className="portfolio__title">Портфолио</h2>
      <div className="portfolio__list">
        <a
          href="https://7sergey.github.io/HowToLearn/"
          className="portfolio__link"
        >
          <p className="portfolio__subtitle">Статичный сайт</p>
          <div className="portfolio__img" />
        </a>

        <a
          href="https://7sergey.github.io/russian-travel/"
          className="portfolio__link"
        >
          <p className="portfolio__subtitle">Адаптивный сайт</p>
          <div className="portfolio__img" />
        </a>

        <a
          href="https://fedorov.nomoredomainsmonster.ru/"
          className="portfolio__link"
        >
          <p className="portfolio__subtitle">Одностраничное приложение</p>
          <div className="portfolio__img" />
        </a>
      </div>
    </div>
  );
}

export default Portfolio;
