import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';

function Navigation() {
  return (
    <Navbar bg="dark" data-bs-theme="dark" className='mb-4'>
        <Container>
          <Navbar.Brand href="#home">Image Classifier</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/images">Images</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
  )
}

export default Navigation
