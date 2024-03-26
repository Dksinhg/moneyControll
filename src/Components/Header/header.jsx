import React from "react";
import "./style.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <div className="Parent_header">
        <div className="child_header">
          <Navbar id="navbar" collapseOnSelect expand="lg">
            <Container id="Container">
              <Navbar.Brand id="logo" href="/">
                Money Control
              </Navbar.Brand>
              <Navbar.Toggle aria-controls="responsive-navbar-nav" />
              <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto">
                  <Nav.Link id="font">
                    <Link id="link" to="/">
                      Home
                    </Link>
                  </Nav.Link>
                  <Nav.Link id="font">
                    <Link id="link" to="/about">
                      About
                    </Link>
                  </Nav.Link>
                  <Nav.Link id="font">
                    <Link id="link" to="/services">
                      Services
                    </Link>
                  </Nav.Link>
                  <Nav.Link id="font">
                    <Link id="link" to="/contact">
                      Contact Us
                    </Link>
                  </Nav.Link>
                </Nav>
                <Nav>
                  <Nav.Link id="font" href="#deets">
                    <button> Invest now</button>
                  </Nav.Link>
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
        </div>
      </div>
    </>
  );
};

export default Header;
