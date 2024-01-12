import Footer from "../Footer/Footer";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
// import Preloader from "../Preloader/Preloader";
import SearchForm from "../SearchForm/SearchForm";
import "./SavedMovies.css";

function SavedMovies() {
  return (
    <div className="saved-movies">
      <SearchForm />
      {/* <Preloader />  */}
      <MoviesCardList />
      <Footer />
    </div>
  );
}

export default SavedMovies;
