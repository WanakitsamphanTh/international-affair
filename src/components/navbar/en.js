"use client";

import { useState } from "react";
import Link from "next/link";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function NavigationBar() {
  const [expanded, setExpanded] = useState(false); // Manage the navbar's open state

  const handleToggle = () => {
    setExpanded(!expanded); // Toggle between open/close
  };

  const handleLinkClick = () => {
    setExpanded(false); // Close the navbar on link click
  };

  return (
    <Navbar
      expand="lg"
      className="bg-body-tertiary"
      sticky="top"
      expanded={expanded} // Bind expanded state
    >
      <Container>
        <Navbar.Brand as={Link} href="/en/">
          <img
            src="https://www.sendai-nct.ac.jp/wp/wp-content/themes/lab-sendainct/assets/images/logo-en.svg"
            alt="Sendai KOSEN Logo"
            height="32"
            className="d-inline-block align-top"
          />
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          onClick={handleToggle} // Toggle navbar state
        />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} href="/en/" onClick={handleLinkClick}>
              Home
            </Nav.Link>
            <Nav.Link as={Link} href="/en/relation" onClick={handleLinkClick}>
              International Partnership
            </Nav.Link>
            <Nav.Link as={Link} href="/en/courses" onClick={handleLinkClick}>
              Courses
            </Nav.Link>
            <Nav.Link as={Link} href="/en/residence" onClick={handleLinkClick}>
              Residence Permit
            </Nav.Link>
            <Nav.Link as={Link} href="/en/accommodation" onClick={handleLinkClick}>
              Accommodation
            </Nav.Link>
            <Nav.Link as={Link} href="/en/message" onClick={handleLinkClick}>
              Messages
            </Nav.Link>
            <Nav.Link as={Link} href="/en/contact" onClick={handleLinkClick}>
              Contact
            </Nav.Link>
            <Nav.Link
              as={Link}
              href="/ja"
              className="d-inline-block text-center bg-dark text-white rounded"
              style={{
                width: "80px",
                height: "40px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
              onClick={handleLinkClick}
            >
              日本語
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;