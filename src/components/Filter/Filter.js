import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

const genres = ["Action", "Comedy", "Drama", "Fantasy"];

export const Filter = () => {
  return (
    <Container>
      <Row>
        {genres.map((genre) => {
          return (
            <Col>
              <Button>{genre}</Button>
            </Col>
          );
        })}
      </Row>
    </Container>
  );
};
