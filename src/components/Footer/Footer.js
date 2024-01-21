import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <h2 className="footer__title">
        Учебный проект Яндекс.Практикум х BeatFilm.
      </h2>
      <div className="footer__copyright">
        <p className="footer__subtitle footer__copy">©2020</p>
        <div className="footer__container">
          <p className="footer__subtitle">Яндекс.Практикум</p>
          <p className="footer__subtitle">Github</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
