import "./AboutProject.css";

function AboutProject() {
  return (
    <div className="about-project">
      <h2 className="about-project__header">О проекте</h2>
      <div className="about-project__grid">
        {/* тут грид 2х2 */}

        <h3 className="about-project__title">
          Дипломный проект включал 5 этапов
        </h3>

        <h3 className="about-project__title">
          На выполнение диплома ушло 5 недель
        </h3>
        <p className="about-project__subtitle">
          Составление плана, работу над бэкендом, вёрстку, добавление
          функциональности и финальные доработки.
        </p>
        <p className="about-project__subtitle">
          У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было
          соблюдать, чтобы успешно защититься.
        </p>
      </div>
      <div className="__grid">
        {/* тут тоже грид 2х2 (1неделя, 4 недели, бекенд, фронтенд) */}
        <div>1 неделя</div>
        <div>4 недели</div>
        <div>Back-end</div>
        <div>Front-end</div>
      </div>
    </div>
  );
}

export default AboutProject;
