import React from "react";
import { Container, Navbar, Nav } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

const Header = () => {
  return (
    <header>
      <Navbar bg="light" expand="lg">
        <Container>
          <LinkContainer to="/">
            <Navbar.Brand>
              <img src="./shoto.png" alt="logo" />
            </Navbar.Brand>
          </LinkContainer>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <LinkContainer to="/places">
                <Nav.Link href="/">All Users</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/u1/places">
                <Nav.Link href="/u1/places">My Places</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/places/new">
                <Nav.Link to="/places/new">Add Places</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/auth">
                <Nav.Link to="/auth">Authenticate</Nav.Link>
              </LinkContainer>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
