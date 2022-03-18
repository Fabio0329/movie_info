import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";

export const NavBar = () => {
  return (
    <Navbar bg="light">
      <Container fluid>
        <Navbar.Brand>Movie Info</Navbar.Brand>
      </Container>
    </Navbar>
  );
};
