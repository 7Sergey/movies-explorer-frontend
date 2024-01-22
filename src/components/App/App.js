import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Login from "../Login/Login";
import Register from "../Register/Register";
import Profile from "../Profile/Profile";
import Movies from "../Movies/Movies";
import SavedMovies from "../SavedMovies/SavedMovies";
import { useState } from "react";
import Footer from "../Footer/Footer";
import PageNotFound from "../PageNotFound/PageNotFound";

function App() {
  const [isLogin, setIsLogin] = useState(true);
  const [name, setName] = useState("Виталий");
  const [email, setEmail] = useState("pochta@yandex.ru");

  return (
    <section className="App">
      <Routes>
        <Route path="/" element={<Header isLogin={isLogin} />}>
          <Route
            index
            element={
              <>
                <Main />
                <Footer />
              </>
            }
          />
          <Route path="movies" element={<Movies />} />
          <Route path="saved-movies" element={<SavedMovies />} />

          <Route
            path="profile"
            element={<Profile name={name} email={email} />}
          />
        </Route>
        <Route path="sign-in" element={<Login />} />
        <Route path="sign-up" element={<Register />} />

        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </section>
  );
}

export default App;
