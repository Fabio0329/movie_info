import Image from "react-bootstrap/Image";
import Col from "react-bootstrap/Col";
import "./Movie.css";

export const Movie = ({ movie, imgURL }) => {
  return (
    <Col className="movie_container">
      <Image
        src={imgURL.base_url + "w342" + movie.poster_path}
        alt="sorry I messed up"
        className="movie_poster mb-1"
      />
      <h4>{movie.title}</h4>
    </Col>
  );
};
