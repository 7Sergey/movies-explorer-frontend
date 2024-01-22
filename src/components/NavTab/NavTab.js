import "./NavTab.css";

function NavTab() {
  return (
    <section className="nav-tab">
      <a href="#AboutProject" className="nav-tab__item">
        О проекте
      </a>
      <a href="#Techs" className="nav-tab__item">
        Технологии
      </a>
      <a href="#AboutMe" className="nav-tab__item">
        Студент
      </a>
    </section>
  );
}

export default NavTab;
