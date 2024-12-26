"use client";
import Link from 'next/link';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function NavigationBar() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary" sticky='top'>
      <Container>
        <Navbar.Brand href="./">
          <img
            src="https://www.sendai-nct.ac.jp/wp/wp-content/themes/lab-sendainct/assets/images/logo-en.svg"
            alt="Sendai KOSEN Logo"
            height="32"
            className="d-inline-block align-top"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} href='/en/'>Home</Nav.Link>
            <Nav.Link as={Link} href='/en/courses'>Courses</Nav.Link>
            <Nav.Link as={Link} href='/en/relation'>International Relationship</Nav.Link>
            <Nav.Link as={Link} href='/en/residence'>Residence Permit</Nav.Link>
            <Nav.Link as={Link} href='/en/accommodation'>Accommodation</Nav.Link>
            <Nav.Link as={Link} href='/en/message'>Messages</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;