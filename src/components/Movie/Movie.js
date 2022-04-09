import Image from "react-bootstrap/Image";
import Col from "react-bootstrap/Col";
import { Link } from "react-router-dom";
import "./Movie.css";

// FC that returns a movie poster as a link to the corresponding movie details page
export const Movie = ({ movie, imgURL }) => {
  return (
    <Col className="movie_container">
      <Link to={`/movie/${movie.id}`}>
        <Image
          src={imgURL.base_url + "w342" + movie.poster_path}
          alt={`${movie.title} poster`}
          className="movie_poster mb-1"
        />
        <h4>{movie.title}</h4>
      </Link>
    </Col>
  );
};
