import React from "react";
import "./Navbar.css";
import { Navbar, Nav } from "react-bootstrap";
import { withRouter } from "react-router-dom";

const Navigation = (props) => {
  console.log(props);
  return (
    <Navbar bg="primary" variant="dark" className="Navcontainer">
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav>
          <Nav.Link className="Navbtn" href="/home">
            Home
          </Nav.Link>
          <Nav.Link className="Navbtn" href="/pain">
            Pain
          </Nav.Link>
          <Nav.Link className="Navbtn" href="/love-and-pain">
            Love and Pain
          </Nav.Link>
          <Nav.Link className="Navbtn" href="/results">
            Results
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default withRouter(Navigation);
