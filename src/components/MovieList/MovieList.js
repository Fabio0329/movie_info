import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useState, useEffect } from "react";
import "./MovieList.css";

const API_URL = `https://api.themoviedb.org/3/discover/movie?language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate&api_key=${process.env.REACT_APP_MOVIE_API}`;
const CONFIG_URL = `https://api.themoviedb.org/3/configuration?api_key=${process.env.REACT_APP_MOVIE_API}`;

export const MovieList = () => {
  const [movies, setMovies] = useState([]);
  const [config, setConfig] = useState({});

  const getMovies = async () => {
    try {
      let res = await fetch(API_URL);
      let movies = await res.json();
      setMovies(movies.results);
    } catch (e) {
      console.error(e);
    }
  };

  const getConfig = async () => {
    try {
      let res = await fetch(CONFIG_URL);
      let configs = await res.json();
      setConfig(configs.images);
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    getMovies();
    getConfig();
  }, []);

  return (
    <Container fluid>
      <Row>
        <Col>
          <h1>Movie List Goes Here</h1>
        </Col>
      </Row>
    </Container>
  );
};