import React, { useEffect } from "react";
import { usePopularMoviesQuery } from "../../hooks/usePopularMovies";
import Banner from "./components/Banner/Banner";
import PopularMoviesSlide from "./components/MoviesSlide/PopularMoviesSlide";
import TopratedMovieSlide from "./components/MoviesSlide/TopratedMovieSlide";
import UpcomingMovieSlide from "./components/MoviesSlide/UpcomingMovieSlide";

const Homepage = () => {
  return (
    <div>
      <Banner />
      <PopularMoviesSlide />
      <TopratedMovieSlide />
      <UpcomingMovieSlide />
    </div>
  );
};

export default Homepage;
