import Footer from "../Footer/Footer";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
// import Preloader from "../Preloader/Preloader";
import SearchForm from "../SearchForm/SearchForm";
import "./Movies.css";

function Movies() {
  return (
    <div className="movies">
      <SearchForm />
      {/* <Preloader />  */}
      <MoviesCardList />
      <Footer />
    </div>
  );
}

export default Movies;
