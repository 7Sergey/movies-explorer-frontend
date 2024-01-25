export default function getMovies() {
  return fetch(`https://api.nomoreparties.co/beatfilm-movies`, {
    headers: {
      "Content-Type": "application/json",
    },
    method: "GET",
  }).then((res) =>
    res.ok ? res.json() : Promise.reject(`Error:${res.status}`)
  );
}
