"use client";
import { useState } from "react";
import Link from "next/link";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

const NavigationBar = () => {
  const [expanded, setExpanded] = useState(false);

  const handleToggle = () => setExpanded(!expanded);
  const handleLinkClick = () => setExpanded(false);

  const navLinks = [
    { href: "/en/", text: "Home" },
    { href: "/en/relation", text: "International Partnership" },
    { href: "/en/courses", text: "Courses" },
    { href: "/en/residence", text: "Entry Japan" },
    { href: "/en/accommodation", text: "Accommodation" },
    { href: "/en/message", text: "Messages" },
    { href: "/en/contact", text: "Contact" }
  ];

  return (
    <Navbar
      expand="lg"
      className="bg-body-tertiary"
      sticky="top"
      expanded={expanded}
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
          onClick={handleToggle}
        />

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            {navLinks.map((link, index) => (
              <Nav.Link
                key={index}
                as={Link}
                href={link.href}
                onClick={handleLinkClick}
              >
                {link.text}
              </Nav.Link>
            ))}

            <Nav.Link
              as={Link}
              href="/ja"
              onClick={handleLinkClick}
              className="ms-2 bg-dark text-white rounded d-flex align-items-center justify-content-center"
              style={{
                width: "80px",
                height: "40px",
              }}
            >
              日本語
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;