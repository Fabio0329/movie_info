import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import "./Filter.css";

// Array of movie categories
const genres = ["Action", "Comedy", "Drama", "Fantasy", "Horror", "Popular"];

// FC that filters the movie list by genre
export const Filter = ({ setGenre }) => {
  // Function that converts movie category to corresponding tmdb api id code
  const convertGenreToId = (e) => {
    switch (e.target.textContent) {
      case "Action":
        setGenre("28");
        break;
      case "Comedy":
        setGenre("35");
        break;
      case "Drama":
        setGenre("18");
        break;
      case "Fantasy":
        setGenre("14");
        break;
      case "Horror":
        setGenre("27");
        break;
      case "Popular":
        setGenre("");
        break;
      default:
        setGenre("");
        break;
    }
  };

  return (
    <Container>
      <Row className="m-3">
        {genres.map((genre) => {
          return (
            <Col className="text-center" key={genres.indexOf(genre)}>
              <Button
                className="custom"
                onClick={convertGenreToId}
                variant="secondary"
              >
                {genre}
              </Button>
            </Col>
          );
        })}
      </Row>
    </Container>
  );
};
