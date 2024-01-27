import MovieCard from "../MovieCard/MovieCard";
import "./MoviesCardList.css";

function MovieCardList({ searchResults }) {
  return (
    <>
      <section className="movies-cardlist">
        {searchResults.map((movie) => {
          return (
            <MovieCard
              trailerLink={movie.trailerLink}
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
