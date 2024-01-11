import "./MovieCard.css";

function MovieCard({ title, duration, image, isLiked }) {
  return (
    <div className="movie-card">
      {isLiked ? (
        <button className="movie-card__button">Сохранить</button>
      ) : (
        <button className="movie-card__button movie-card__like "></button>
      )}
      <img className="movie-card__image" src={image} alt={title} />
      <div className="movie-card__info">
        <h3 className="movie-card__title">{title}</h3>
        <p className="movie-card__duration">{duration}</p>
      </div>
    </div>
  );
}

export default MovieCard;
