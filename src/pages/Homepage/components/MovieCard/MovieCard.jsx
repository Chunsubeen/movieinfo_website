import React from "react";
import { Badge } from "react-bootstrap";
import "./MovieCard.style.css";
import { useMovieGenreQuery } from "../../../../hooks/useMoviegenre";
import { useNavigate } from "react-router-dom";

const MovieCard = ({ movie }) => {
  const navigate = useNavigate();
  const { data: genreData } = useMovieGenreQuery();

  //장르번호 이름으로 보여주기
  const showGenre = (genreIdList) => {
    if (!genreData) return [];
    const genreNameList = genreIdList.map((id) => {
      const genreObj = genreData.find((genre) => genre.id === id);
      return genreObj.name;
    });

    return genreNameList;
  };

  return (
    <div
      className="movie-card"
      style={{
        backgroundImage:
          "url(" +
          `https://www.themoviedb.org/t/p/w600_and_h900_bestv2${movie.poster_path}` +
          ")",
      }}
      onClick={() => navigate(`/movies/${movie.id}`)}
    >
      <div className="overlay">
        <h2>{movie.title}</h2>
        {showGenre(movie.genre_ids).map((id, index) => (
          <Badge key={index} variant="danger">
            {id}
          </Badge> // Corrected the 'bg' to 'variant'
        ))}
        <div>
          <div className="movie-info">
            <div className="movie-info-item">
              <span className="icon">⭐</span> {/* Icon example */}
              {movie.vote_average}
              <br />
            </div>
            <div className="movie-info-item">
              <span className="icon">👥</span> {/* Icon example */}
              {movie.popularity}
            </div>
            <div className="movie-info-item">
              <span className={`badge ${movie.adult ? "over18" : "under18"}`}>
                {movie.adult ? "Over 18" : "Under 18"}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
