import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";

function NavDefault() {
  return (
    <>
      <Navbar expand="lg" bg="black" data-bs-theme="dark">
        <Container>
          <Navbar.Brand as={Link} style={{ color: 'red' }} to="/moviepage">
           Movies Project
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link as={Link} style={{ color: 'red' }} to="/moviepage">
               Movies
              </Nav.Link>
              <Nav.Link as={Link} style={{ color: 'red' }} to="/aboutus">
               About
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default NavDefault;
