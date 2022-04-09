import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import "./NavBar.css";

export const NavBar = () => {
  return (
    <Navbar bg="light">
      <Container>
        <Navbar.Brand>Movie Info App</Navbar.Brand>
      </Container>
    </Navbar>
  );
};
