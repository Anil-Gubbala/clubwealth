import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

const NavigationBar = () => {
  return (
    <>
      <Navbar bg="primary" variant="dark">
        <Container>
          <Navbar.Brand href="/people/all">Home</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/people/all">People</Nav.Link>
            <Nav.Link href="/films/all">Films</Nav.Link>
            <Nav.Link href="/starships/all">Starships</Nav.Link>
            <Nav.Link href="/planets/all">Planets</Nav.Link>
            <Nav.Link href="/species/all">Species</Nav.Link>
            <Nav.Link href="/vehicles/all">Vehicles</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>

    // <div className="navbar">
    //   <ul className="nav-links">
    //     <Link to="people/all">People</Link>
    //     <Link to="films/all">Films</Link>
    //     <Link to="starships/all">Starships</Link>
    //     <Link to="planets/all">Planets</Link>
    //     <Link to="species/all">Species</Link>
    //     <Link to="vehicles/all">Vehicles</Link>
    //   </ul>

    // </div>
  );
};

export { NavigationBar };
export default NavigationBar;
