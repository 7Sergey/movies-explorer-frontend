import "./Portfolio.css";

function Portfolio() {
  return (
    <section className="portfolio">
      <h2 className="portfolio__title">Портфолио</h2>
      <div className="portfolio__list">
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://7sergey.github.io/HowToLearn/"
          className="portfolio__link"
        >
          <p className="portfolio__subtitle">Статичный сайт</p>
          <div className="portfolio__img" />
        </a>

        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://7sergey.github.io/russian-travel/"
          className="portfolio__link"
        >
          <p className="portfolio__subtitle">Адаптивный сайт</p>
          <div className="portfolio__img" />
        </a>

        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://fedorov.nomoredomainsmonster.ru/"
          className="portfolio__link"
        >
          <p className="portfolio__subtitle">Одностраничное приложение</p>
          <div className="portfolio__img" />
        </a>
      </div>
    </section>
  );
}

export default Portfolio;
