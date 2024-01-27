import Footer from "../Footer/Footer";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
// import Preloader from "../Preloader/Preloader";
import SearchForm from "../SearchForm/SearchForm";
import "./SavedMovies.css";

function SavedMovies({ movies }) {
  return (
    <section className="saved-movies">
      <SearchForm />
      {/* <Preloader />  */}
      <MoviesCardList movies={movies} />
      <Footer />
    </section>
  );
}

export default SavedMovies;
