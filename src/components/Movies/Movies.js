import Footer from "../Footer/Footer";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
// import Preloader from "../Preloader/Preloader";
import SearchForm from "../SearchForm/SearchForm";
import "./Movies.css";

function Movies() {
  return (
    <section className="movies">
      <SearchForm />
      {/* <Preloader />  */}
      <MoviesCardList />
      <Footer />
    </section>
  );
}

export default Movies;
