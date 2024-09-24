import React from "react";
import { useMovieDetailQuery } from "../../hooks/useMovieDetail";
import { useParams } from "react-router-dom";
import Banner from "../Homepage/components/Banner/Banner";
import { Alert, Col, Row, Container } from "react-bootstrap";

const MovieDetailPage = ({ movie }) => {
  const { id } = useParams();
  const { data, isLoading, isError, error } = useMovieDetailQuery(id);

  console.log("Movie Data", data);

  function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  출처: https: if (isLoading) {
    return <h1>Loading...</h1>; // 로딩스피너 나중에 추가하기
  }

  if (isError) {
    return <Alert variant="danger">{error.message}</Alert>; // 에러
  }

  return (
    <div>
      <Container className="pb-5">
        <Row>
          <Col xs={12} lg={6} className="d-flex justify-content-center mt-5">
            <img
              className="w-80"
              src={`https://www.themoviedb.org/t/p/w300_and_h450_bestv2/${data.data.poster_path}`}
            />
          </Col>
          <Col xs={12} lg={6} className="mt-5">
            <div className="d-flex mb-4">
              {data?.data.genres.map((genre, index) => (
                <div className="movie-badge me-2" key={index}>
                  {genre.name}
                </div>
              ))}
            </div>
            <h1 className="movie-title">{data.data.title}</h1>
            <h3>{data.data.tagline}</h3>
            <div className="py-4 movie-number  border-bottom border-white">
              <span>
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/IMDB_Logo_2016.svg/575px-IMDB_Logo_2016.svg.png"
                  width={30}
                  className="me-1"
                />
                {data.data.vote_average}
              </span>
              <span>
                <img
                  src="https://cdn-icons-png.flaticon.com/512/8762/8762440.png"
                  width={30}
                  className="ms-3 me-1"
                />
                {data.data.popularity}
              </span>
              <span>
                {data.data.adult ? (
                  <img
                    src="https://static.vecteezy.com/system/resources/previews/018/868/352/original/age-rating-sign-over-18-on-transparent-background-free-png.png"
                    width={30}
                    className="ms-2"
                  />
                ) : (
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/Republic_Of_Korea_Broadcasting-TV_Rating_System%28ALL%29.svg/1200px-Republic_Of_Korea_Broadcasting-TV_Rating_System%28ALL%29.svg.png"
                    width={30}
                    className="ms-2"
                  />
                )}
              </span>
            </div>
            <div className="py-4 border-bottom border-white">
              {data.data.overview}
            </div>
            <div className="py-4">
              <div className="d-flex align-items-center mb-2">
                <div className="movie-detail-badge me-2">Budget</div>
                <div>$ {numberWithCommas(data.data.budget)}</div>
              </div>

              <div className="d-flex align-items-center mb-2">
                <div className="movie-detail-badge me-2">Revenue</div>
                <div>$ {numberWithCommas(data.data.revenue)}</div>
              </div>

              <div className="d-flex align-items-center mb-2">
                <div className="movie-detail-badge me-2">Release Date</div>
                <div>{data.data.release_date}</div>
              </div>

              <div className="d-flex align-items-center mb-2">
                <div className="movie-detail-badge me-2">Run time</div>
                <div>{data.data.runtime}분</div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default MovieDetailPage;
