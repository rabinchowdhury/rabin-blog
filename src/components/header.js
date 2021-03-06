// import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react";

import {
  Navbar, 
  Nav, 
  // NavDropdown, 
  // Form,
  // FormControl, 
  // Button, 
  } from 'react-bootstrap';

const Header = ({ siteTitle }) => (
  <header>
    <div>
      <Navbar variant="dark" expand="md" sticky="top">
      <Navbar.Brand href="/"><b>Duct Tape Startup</b></Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/blogposts">Blog Posts</Nav.Link>
          <Nav.Link href="/about">About Us</Nav.Link>
          {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
          </NavDropdown> */}
        </Nav>
        {/* <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-success">Search</Button>
        </Form> */}
      </Navbar.Collapse>
      </Navbar>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
