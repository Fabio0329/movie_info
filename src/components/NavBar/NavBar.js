import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import "./NavBar.css";

// FC returns navbar
export const NavBar = () => {
  return (
    <Navbar bg="light">
      <Container>
        <Navbar.Brand>Movie Info App</Navbar.Brand>
      </Container>
    </Navbar>
  );
};
