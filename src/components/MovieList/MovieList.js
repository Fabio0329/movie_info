import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import { NavBar } from "../NavBar/NavBar";
import { Filter } from "../Filter/Filter";
import { Movie } from "../Movie/Movie";
import { useState, useEffect } from "react";
import "./MovieList.css";

export const MovieList = () => {
  const [movies, setMovies] = useState([]);
  const [config, setConfig] = useState({});
  const [genre, setGenre] = useState("");

  const API_URL = `https://api.themoviedb.org/3/discover/movie?language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate&api_key=${process.env.REACT_APP_MOVIE_API}&with_genres=${genre}`;
  const CONFIG_URL = `https://api.themoviedb.org/3/configuration?api_key=${process.env.REACT_APP_MOVIE_API}`;

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
  }, [genre]);

  return (
    <>
      <NavBar />
      <Filter setGenre={setGenre} />
      <Container fluid>
        <Row>
          {movies.map((movie) => {
            return (
              <Movie
                movie={movie}
                imgURL={config}
                key={movies.indexOf(movie)}
              />
            );
          })}
        </Row>
      </Container>
    </>
  );
};
