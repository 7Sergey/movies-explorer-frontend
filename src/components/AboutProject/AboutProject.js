import "./AboutProject.css";

function AboutProject() {
  return (
    <section className="about-project" id="AboutProject">
      <h2 className="about-project__header">О проекте</h2>
      <div className="about-project__container">
        <div className="about-project__description">
          <h3 className="about-project__description-title">
            Дипломный проект включал 5 этапов
          </h3>
          <p className="about-project__description-subtitle">
            Составление плана, работу над бэкендом, вёрстку, добавление
            функциональности и финальные доработки.
          </p>
        </div>
        <div className="about-project__description">
          <h3 className="about-project__description-title">
            На выполнение диплома ушло 5 недель
          </h3>

          <p className="about-project__description-subtitle">
            У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было
            соблюдать, чтобы успешно защититься.
          </p>
        </div>
      </div>
      <div className="about-project__deadline">
        {/* тут тоже грид 2х2 (1неделя, 4 недели, бекенд, фронтенд) */}
        <div className="about-project__green-line">1 неделя</div>
        <div className="about-project__grey-line">4 недели</div>
        <div className="about-project__text">Back-end</div>
        <div className="about-project__text">Front-end</div>
      </div>
    </section>
  );
}

export default AboutProject;
