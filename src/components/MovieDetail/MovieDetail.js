import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./MovieDetail.css";

const API_URL = `https://api.themoviedb.org/3/movie/`;
const BACKDROP_SIZE = "original";
const POSTER_SIZE = "w500";
const BASE_IMG_URL = "http://image.tmdb.org/t/p/";

export const MovieDetail = () => {
  const { id } = useParams();
  const [movieDetails, setMovieDetails] = useState({});

  const getMovieDetails = async () => {
    const res = await fetch(
      API_URL + id + "?api_key=" + process.env.REACT_APP_MOVIE_API
    );
    const jsonData = await res.json();
    setMovieDetails(jsonData);
  };

  useEffect(getMovieDetails, [id]);

  return (
    <Container fluid>
      <Row>
        <Col>
          <Image
            className="backdrop"
            src={BASE_IMG_URL + BACKDROP_SIZE + movieDetails.backdrop_path}
          />
        </Col>
      </Row>
      <Row>
        <Col xl={3} className="detail-poster">
          <Image
            fluid
            src={BASE_IMG_URL + POSTER_SIZE + movieDetails.poster_path}
          />
        </Col>
        <Col xl={6} className="align-middle">
          <div className="pt-4 ms-2">
            <h1>{movieDetails.title}</h1>
            <h4>{movieDetails.overview}</h4>
            <p> {movieDetails.homepage}</p>
          </div>
        </Col>
      </Row>
    </Container>
  );
};
