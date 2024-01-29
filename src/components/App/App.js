import React, { useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
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
import { CurrentUserContext } from "../contexts/CurrentUserContext";
import { api } from "../../utils/MainApi";
import { getContent } from "../../utils/auth";

function App() {
  const [name, setName] = useState("Виталий");
  const [email, setEmail] = useState("pochta@yandex.ru");

  const [isLoggedIn, setIsLoggedIn] = useState(false); //залогинен ли
  const [movies, setMovies] = useState([]); //фильмы
  const [currentUser, setCurrentUser] = React.useState("данные пользователя"); //данные текущего пользователя
  const [searchResults, setSearchResults] = useState([]); // отфильтрованные фильмы
  const [isLoading, setIsLoading] = useState(false); //загружается страница/поиск фильмы пока не искали

  const [userData, setUserData] = React.useState({
    _id: "",
    email: "",
  });

  const navigate = useNavigate();

  React.useEffect(() => {
    getMovies()
      .then((movies) => {
        setMovies(movies);
        setIsLoading(true);
      })
      .catch(console.log);
  }, []);

  const auth = (token) => {
    getContent(token)
      .then((res) => {
        console.log(token);
        setUserData(res.data);
        setIsLoggedIn(true);
        navigate("/");
      })
      .catch(() => {
        setIsLoggedIn(false);
        navigate("/signin");
      });
  };

  React.useEffect(() => {
    const token = localStorage.getItem("token");
    auth(token);
  }, []);

  function handleLogin(data) {
    return api
      .login(data.email, data.password)
      .then((res) => {
        console.log("res:", res);
        if (res.token) {
          localStorage.setItem("token", res.token);
          console.log("Успешный вход в систему");
          setUserData(data);
          setIsLoggedIn(true);
        }

        console.log("залогинен");
      })
      .catch((error) => {
        console.error("Ошибка входа в систему:", error);

        // setisSuccess(false)
        // setInfoTooltipPopup(true)
      });
  }

  return (
    <section className="App">
      <Routes>
        <Route path="/" element={<Header isLoggedIn={isLoggedIn} />}>
          <Route
            index
            element={
              <ProtectedRoute isLoggedIn={isLoggedIn}>
                <>
                  <CurrentUserContext.Provider value={currentUser}>
                    <Main />
                    <Footer />
                  </CurrentUserContext.Provider>
                </>
              </ProtectedRoute>
            }
          />
          <Route
            path="movies"
            element={<Movies movies={movies} isLoading={isLoading} />}
          />
          <Route
            path="saved-movies"
            element={<SavedMovies movies={movies} />}
          />

          <Route
            path="profile"
            element={
              <Profile
                name={name}
                email={email}
                setIsLoggedIn={setIsLoggedIn}
              />
            }
          />
        </Route>
        <Route path="signin" element={<Login onLogin={handleLogin} />} />
        <Route path="signup" element={<Register />} />

        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </section>
  );
}

export default App;
