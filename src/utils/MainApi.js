export default class MainApi {
  constructor({ baseUrl, headers }) {
    this._baseUrl = baseUrl;
    this._headers = headers;
  }

  _checkResponse(res) {
    return res.ok ? res.json() : Promise.reject(`Error:${res.status}`);
  }

  getCurrentUser() {
    return fetch(`${this._baseUrl}/users/me`, {
      headers: this._headers,
      method: "GET",
    }).then((res) => this._checkResponse(res));
  }
  patchUser(name, email) {
    return fetch(`${this._baseUrl}/users/me`, {
      headers: this._headers,
      method: "PATCH",
      body: JSON.stringify({
        name: name,
        email: email,
      }),
    }).then((res) => this._checkResponse(res));
  }

  getSavedMovies() {
    return fetch(`${this._baseUrl}/movies`, {
      headers: this._headers,
      method: "GET",
    }).then((res) => this._checkResponse(res));
  }

  createMovie() {
    return fetch(`${this._baseUrl}/movies`, {
      headers: this._headers,
      method: "POST",
    }).then((res) => this._checkResponse(res));
  }

  deleteMovie(idMovie) {
    return fetch(`${this._baseUrl}/movies/${idMovie}`, {
      headers: this._headers,
      method: "DELETE",
    }).then((res) => this._checkResponse(res));
  }

  createUser(name, email, password) {
    return fetch(`${this._baseUrl}/signup`, {
      headers: this._headers,
      method: "POST",
      body: JSON.stringify({
        name: name,
        email: email,
        password: password,
      }),
    }).then((res) => this._checkResponse(res));
  }

  login(email, password) {
    return fetch(`${this._baseUrl}/signin`, {
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",

      body: JSON.stringify({
        email: email,
        password: password,
      }),

      credentials: "include", // Важно установить credentials в 'include'
    }).then((res) => this._checkResponse(res));
  }

  signout() {
    return fetch(`${this._baseUrl}/signout`, {
      headers: this._headers,
      method: "POST",
    }).then((res) => this._checkResponse(res));
  }
}

export const api = new MainApi({
  // baseUrl: "api.fedorov.movies.nomoredomainsmonster.ru",
  baseUrl: "http://localhost:3000",

  headers: {
    "Content-Type": "application/json",
  },
});
