import MovieCard from "../MovieCard/MovieCard";
import "./MoviesCardList.css";

function MovieCardList({ movies }) {
  console.log(movies);
  return (
    <>
      <section className="movies-cardlist">
        {movies.map((movie) => {
          console.log(movie.image);
          return (
            <MovieCard
              title={movie.nameRU}
              key={movie.id}
              image={movie.image}
              duration={movie.duration}
            />
          );
        })}
      </section>
      <div className="movies-cardlist__button-container">
        <button className="movies-cardlist__button">Ещё</button>
      </div>
    </>
  );
}

export default MovieCardList;
