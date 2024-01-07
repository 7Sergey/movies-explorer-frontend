function Techs() {
  return (
    <div>
      <h2>Технологии</h2>
      <div>
        <h3>7 технологий</h3>
        <p>
          На курсе веб-разработки мы освоили технологии, которые применили в
          дипломном проекте.
        </p>
        <div>
          {/* тут грид на 7 элементов в строчку */}
          <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>JS</li>
            <li>React</li>
            <li>Git</li>
            <li>Express.js</li>
            <li>mongoDB</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Techs;
