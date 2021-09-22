import React from 'react';
import { Navbar,Container,Nav,NavDropdown } from 'react-bootstrap';

const NavBar = () => {
    return (
        <div> 
  <Navbar bg="light" expand="lg">
  <Container>
    <Navbar.Brand href="#home">Tienda Ditutti</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <Nav.Link href="#home">Home</Nav.Link>
        <Nav.Link href="#link">Quienes Somos</Nav.Link>
        <NavDropdown title="Productos" id="basic-nav-dropdown">
          <NavDropdown.Item href="#action/3.1">Golosinas</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">Bebidas</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">Comida</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action/3.4">Otros</NavDropdown.Item>
        </NavDropdown>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
        </div>
    )
}

export default NavBar