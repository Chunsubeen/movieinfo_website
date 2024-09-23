import React, { useEffect } from "react";
import { usePopularMoviesQuery } from "../../hooks/usePopularMovies";
import Banner from "./components/Banner/Banner";

const Homepage = () => {
  return (
    <div>
      <Banner />
    </div>
  );
};

export default Homepage;
