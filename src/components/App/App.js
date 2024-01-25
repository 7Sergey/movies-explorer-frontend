import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
// стили
import "./App.css";
// компоненты
import Header from "../Header/Header";
import Main from "../Main/Main";
import Login from "../Login/Login";
import Register from "../Register/Register";
import Profile from "../Profile/Profile";
import Movies from "../Movies/Movies";
import SavedMovies from "../SavedMovies/SavedMovies";
import Footer from "../Footer/Footer";
import PageNotFound from "../PageNotFound/PageNotFound";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";
import getMovies from "../../utils/MoviesApi";

function App() {
  const [name, setName] = useState("Виталий");
  const [email, setEmail] = useState("pochta@yandex.ru");

  const [isLoggedIn, setIsLoggedIn] = useState(true); //залогинен ли
  const [movies, setMovies] = useState([]); //фильмы

  React.useEffect(() => {
    getMovies()
      .then((movies) => {
        setMovies(movies);
      })
      .catch(console.log);
  }, []);

  return (
    <section className="App">
      <Routes>
        <Route path="/" element={<Header isLoggedIn={isLoggedIn} />}>
          <Route
            index
            element={
              <ProtectedRoute isLoggedIn={isLoggedIn}>
                <>
                  <Main />
                  <Footer />
                </>
              </ProtectedRoute>
            }
          />
          <Route path="movies" element={<Movies movies={movies} />} />
          <Route path="saved-movies" element={<SavedMovies />} />

          <Route
            path="profile"
            element={<Profile name={name} email={email} />}
          />
        </Route>
        <Route path="signin" element={<Login />} />
        <Route path="signup" element={<Register />} />

        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </section>
  );
}

export default App;
