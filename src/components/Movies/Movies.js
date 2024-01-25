import Footer from "../Footer/Footer";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
// import Preloader from "../Preloader/Preloader";
import SearchForm from "../SearchForm/SearchForm";
import "./Movies.css";

function Movies({ movies }) {
  return (
    <section className="movies">
      <SearchForm />
      {/* <Preloader />  */}
      <MoviesCardList movies={movies} />
      <Footer />
    </section>
  );
}

export default Movies;
