import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Preloader from "../Preloader/Preloader";
import SearchForm from "../SearchForm/SearchForm";
import "./Movies.css";

function Movies() {
  return (
    <div className="movies">
      <SearchForm />
      <Preloader />
      <MoviesCardList />
    </div>
  );
}

export default Movies;
