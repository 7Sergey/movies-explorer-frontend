import MovieCard from "../MovieCard/MovieCard";
import "./MoviesCardList.css";

function MovieCardList() {
  return (
    <>
      <div className="movies-cardlist">
        <MovieCard
          title={"33 слова о дизайне"}
          image={require("../../images/33слова.png")}
          duration={"1ч 17м"}
          isLiked={true}
        />
        <MovieCard
          title={"Киноальманах «100 лет дизайна»"}
          image={require("../../images/100.png")}
          duration={"1ч 17м"}
        />
        <MovieCard
          title={"В погоне за Бенкси "}
          image={require("../../images/бенкси.png")}
          duration={"1ч 17м"}
        />
        <MovieCard
          title={"Баския: Взрыв реальности"}
          image={require("../../images/баския.png")}
          duration={"1ч 17м"}
        />
        <MovieCard
          title={"Бег это свобода "}
          image={require("../../images/бег.png")}
          duration={"1ч 17м"}
        />
        <MovieCard
          title={"Книготорговцы "}
          image={require("../../images/книготворцы.png")}
          duration={"1ч 17м"}
        />
        <MovieCard
          title={"Когда я думаю о Германии ночью"}
          image={require("../../images/когда я.png")}
          duration={"1ч 17м"}
        />
        <MovieCard
          title={"Gimme Danger: История Игги и The Stooges"}
          image={require("../../images/Gimme Dange.png")}
          duration={"1ч 17м"}
        />
        <MovieCard
          title={"Дженис: Маленькая девочка грустит"}
          image={require("../../images/дженис.png")}
          duration={"1ч 17м"}
        />
        <MovieCard
          title={"Соберись перед прыжком"}
          image={require("../../images/соберись.png")}
          duration={"1ч 17м"}
        />
        <MovieCard
          title={"Пи Джей Харви: A dog called money"}
          image={require("../../images/пи джей.png")}
          duration={"1ч 17м"}
        />
        <MovieCard
          title={"По волнам: Искусство звука в кино"}
          image={require("../../images/по волнам.png")}
          duration={"1ч 17м"}
        />
      </div>
      <div className="movies-cardlist__button-container">
        <button className="movies-cardlist__button">Ещё</button>
      </div>
    </>
  );
}

export default MovieCardList;
