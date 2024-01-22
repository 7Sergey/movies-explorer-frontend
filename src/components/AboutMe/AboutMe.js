import "./AboutMe.css";

function AboutMe() {
  return (
    <div className="about-me" id="AboutMe">
      <h2 className="about-me__title">Студент</h2>
      <div className="about-me__container">
        <div>
          <p className="about-me__name">Виталий</p>
          <p className="about-me__subtitle">Фронтенд-разработчик, 30 лет</p>
          <p className="about-me__description">
            Я родился и живу в Саратове, закончил факультет экономики СГУ. У
            меня есть жена и дочь. Я люблю слушать музыку, а ещё увлекаюсь
            бегом. Недавно начал кодить. С 2015 года работал в компании «СКБ
            Контур». После того, как прошёл курс по веб-разработке, начал
            заниматься фриланс-заказами и ушёл с постоянной работы.
          </p>
          <a href="https://github.com/7Sergey" className="about-me__link">
            Github
          </a>
        </div>
        <div className="about-me__avatar"></div>
      </div>
    </div>
  );
}

export default AboutMe;
