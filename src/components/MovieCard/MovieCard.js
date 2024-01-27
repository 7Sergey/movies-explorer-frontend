import "./MovieCard.css";

function MovieCard({ trailerLink, title, duration, image, isLiked }) {
  const handleCardClick = () => {
    window.open(trailerLink, "_blank");
  };
  return (
    <section className="movie-card" onClick={handleCardClick}>
      {isLiked ? (
        <button className="movie-card__button">Сохранить</button>
      ) : (
        <button className="movie-card__button movie-card__like "></button>
      )}
      <img
        className="movie-card__image"
        src={`https://api.nomoreparties.co/${image.url}`}
        alt={title}
      />
      <div className="movie-card__info">
        <h3 className="movie-card__title">{title}</h3>
        <p className="movie-card__duration">{duration}</p>
      </div>
    </section>
  );
}

export default MovieCard;
