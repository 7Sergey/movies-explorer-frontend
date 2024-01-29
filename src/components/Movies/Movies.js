import { useState } from "react";
import Footer from "../Footer/Footer";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Preloader from "../Preloader/Preloader";
// import Preloader from "../Preloader/Preloader";
import SearchForm from "../SearchForm/SearchForm";
import "./Movies.css";

function Movies({ movies, isLoading }) {
  const [searchResults, setSearchResults] = useState([]); // отфильтрованные фильмы
  const [isShortFilms, setIsShortFilms] = useState(false); // отфильтрованные фильмы

  function handleCheckboxClick() {
    console.log("чекбокснул");
    setIsShortFilms(!isShortFilms);
  }
  function handleSearch(value) {
    const filteredMovies = movies.filter((movie) => {
      const movieNameRU = movie.nameRU || ""; // Если nameRU не определено, используем пустую строку
      const movieNameEN = movie.nameEN || ""; // Если nameEN не определено, используем пустую строку

      return (
        (movieNameRU.toLowerCase().includes(value.toLowerCase()) ||
          movieNameEN.toLowerCase().includes(value.toLowerCase())) &&
        (isShortFilms ? movie.duration <= 40 : true)
      );
    });
    setSearchResults(filteredMovies);
  }
  // console.log(searchResults);
  return (
    <section className="movies">
      <SearchForm
        onSearch={handleSearch}
        onCheckboxClick={handleCheckboxClick}
        isShortFilms={isShortFilms}
      />

      {
        // isLoading ? (
        //   <Preloader />
        // ) :
        searchResults.lenth === 0 ? (
          <h1>Ничего не найдено</h1>
        ) : (
          <MoviesCardList searchResults={searchResults} />
        )
      }

      <Footer />
    </section>
  );
}

export default Movies;
