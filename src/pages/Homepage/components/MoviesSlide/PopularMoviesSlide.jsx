import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { usePopularMoviesQuery } from "../../../../hooks/usePopularMovies";
import Alert from "react-bootstrap/Alert";
import MovieCard from "../MovieCard/MovieCard";
import "./PopularMoviesSlide.style.css";
import Spinner from "react-bootstrap/Spinner";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 5,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const PopularMoviesSlide = () => {
  const { data, isLoading, isError, error } = usePopularMoviesQuery();

  if (isLoading) {
    return (
      <Spinner animation="border" role="status" variant="danger">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    );
  }

  if (isError) {
    return <Alert variant="danger">{error.message}</Alert>; // 에러
  }

  return (
    <div className="margin">
      <h3>Popular Movies</h3>
      <Carousel
        infinite={true}
        centerMode={true}
        containerClass="carousel-container"
        itemClass="movie-slider p-1"
        responsive={responsive}
      >
        {data.data.results.map((movie, index) => (
          <MovieCard movie={movie} key={index} />
        ))}
      </Carousel>
    </div>
  );
};

export default PopularMoviesSlide;
